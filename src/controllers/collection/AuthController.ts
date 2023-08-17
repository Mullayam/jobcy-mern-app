import { Request, Response } from 'express'
import JSONResponse from "../../services/JSONResponse.js"
import jwt from 'jsonwebtoken'
import Helpers from '../../helpers/index.js'
import { SECRET_KEY } from '../../middlewares/index.js'
import { Tokens as TokenEntitiy } from "../../factory/entities/user/tokens.js";
import Utils from '../../utils/index.js'
import { ForgetPassword } from "../../utils/templates/email/forgot-password.js"
import { WelcomeMessage } from "../../utils/templates/email/welcome-message.js"
import MailService from '../../services/EmailConfiguration.js'
import { Member } from '../../factory/entities/user/member.js'
import { AppDataSource } from '../../DataSource.js'
import { MoreInfo } from '../../factory/entities/user/moreInfo.js'
import { CacheService } from '../../app/modules/cache.js'
import { EmailVerification } from '../../utils/templates/email/email-verification.js'

const Email = MailService.getInstance()
const UserRepo = AppDataSource.getRepository(Member)
const UserMoreInfo = AppDataSource.getRepository(MoreInfo)
const TokenRepo = AppDataSource.getRepository(TokenEntitiy)
class Authentication {

    /**
     * Logs in a user by checking their email and password.
     *
     * @param {Request} req - the request object
     * @param {Response} res - the response object
     * @return {Promise<void>} - returns a Promise that resolves to void
     */
    async Login(req: Request, res: Response): Promise<void> {
        try {

            if (!req.body.email || !req.body.password) {
                throw new Error("Please Provide Email and Password");
            }
            new Member()
            const isUser = await AppDataSource.manager.findOne(Member, { where: { email: req.body.email } })

            if (!isUser) {
                throw new Error("User doest not Exist");
            }
            if (!Utils.ComparePassword(isUser.password, req.body.password)) {
                throw new Error("Invalid Credentials");
            }
            // if (isUser.status === 0) {
            //     throw new Error("Your Email is not Verified, Please Verify Your Email");
            // }
            const Token = jwt.sign({ id: "testID", name: "mullayam" }, SECRET_KEY, { expiresIn: "3600" })
            const RefreshToken = Helpers.HandleRefreshToken(isUser.id)

            res.cookie("token", Token, { domain: process.env.APP_DOMAIN, expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            res.cookie("refresh_token", RefreshToken, { domain: process.env.APP_DOMAIN, expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            return JSONResponse.Response(req, res, "Login Successful ,Redirecting...", { User: isUser, Token, RefreshToken }, 200)

        } catch (error: any) {
            return JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
    /**
     * Registers a user.
     *
     * @param {Request} req - the request object
     * @param {Response} res - the response object
     * @return {Promise<void>} - returns a Promise with no value
     */
    async Register(req: Request, res: Response): Promise<void> {

        try {
            // check for errors
            if (!req.body.email || !req.body.password || !req.body.name) {
                throw new Error("Please Provide Email and Password");
            }
            // check user exist or not
            const isUser = await UserRepo.findOne({ where: { email: req.body.email } })
            if (isUser) {
                throw new Error("User Already Exist");
            }
            const userID = Utils.CreateUserID()
            const username = req.body.name.toLowerCase().split(" ")[0] + userID.slice(0, 5)
            const HashedPassword = Utils.HashPassword(req.body.password)

            // create custom userid
            const Inof = new MoreInfo()
            const User = new Member()
            const CurrentInfo = await UserMoreInfo.save(Inof)
            const UserInfo = { username, fullname: req.body.name, email: req.body.email, password: HashedPassword, moreInfo: CurrentInfo } // user object
            const CreatUser = await UserRepo.save(UserInfo)

            // query to insert into database
            const Token = jwt.sign({ id: CreatUser.id, username, type: CreatUser.account, profileStatus: CreatUser.profileStatus }, SECRET_KEY, { expiresIn: "24h" }) // jwt token sign
            const RefreshToken = Helpers.HandleRefreshToken(User.id) // refresh token

            res.cookie("token", Token, { domain: process.env.APP_DOMAIN, expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            res.cookie("refresh_token", RefreshToken, { domain: process.env.APP_DOMAIN, expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            const WelcomeMsg = WelcomeMessage("http://localhost:7132/_static/jobcy/images", username)
            Email.TemplateMail({ to: req.body.email, subject: "Account Created", html: WelcomeMsg, text: "", from: "Account Jobcy" })
            return JSONResponse.Response(req, res, "User Register Successully", { Token, RefreshToken }, 200)

        } catch (error: any) {
            return JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
    /**
     * Handles the forget password functionality.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {Promise<Response | void>} The response or void.
     */
    async ForgetPassword(req: Request, res: Response): Promise<Response | void> {
        try {
            if (!req.body.email) {
                throw new Error("Please Provide Email");
            }
            const getUser = await this.CheckUserExistorNot(req.body.email) as Member
            const GeneratedToken = this.NewToken()
            const Tokens = new TokenEntitiy()
            Tokens.token = GeneratedToken
            Tokens.expiresAt = new Date(Date.now() + 600)
            Tokens.user = getUser
            await TokenRepo.save(Tokens)
            const URL = `${process.env.FRONTEND_URL}/reset-password/${GeneratedToken}`
            const PrepareTemplate = ForgetPassword(process.env.APP_IMG_URL as string, URL)
            Email.TemplateMail({ to: req.body.email, subject: "Account Activation", html: PrepareTemplate, text: "", from: "Account Jobcy" })
            return JSONResponse.Response(req, res, "Code Resent, Please Check Your Email", {}, 200)

        } catch (error: any) {
            return JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
    /**
     * Refreshes the token for the given request and response.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {void}
     */
    RefreshToken(req: Request, res: Response): void {
        const Tokens = Helpers.getAllTokens()
        const BlacklistedTokens = Helpers.AllBlacklistedTokens()
        try {
            if (!req.params.id) {
                throw new Error("Id is Required Parameter");
            }
            if (!req.query.refresh_token) {
                throw new Error("Please Provide Previously Generated Refresh Token");
            }
            if (BlacklistedTokens.includes(req.query.refresh_token as string)) {
                throw new Error("This Token is Already Used in Please Login Again");
            } else {
                if (Tokens.has(req.params.id)) {
                    if (Tokens.get(req.params.id) === req.query.refresh_token) {
                        BlacklistedTokens.push(req.query.refresh_token as string)
                        const RefreshToken = Helpers.HandleRefreshToken(req.params.id)
                        res.cookie("refresh_token", RefreshToken, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
                        return JSONResponse.Response(req, res, "Refresh Token Generated", { message: RefreshToken }, 200)
                    }
                    throw new Error("Token checksum info is mismatched")
                }
                else {
                    throw new Error("There is no Refresh Token Found Please Login Again");
                }
            }
        } catch (error: any) {
            return JSONResponse.Error(req, res, "Something Went Wrong", { message: error.message }, 403)
        }
    }
    /**
     * Retrieves the current user information.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {Promise<void>} Promise that resolves when the user information is retrieved.
     */

    async CurrentUser(req: Request, res: Response): Promise<void> {
        let isCached = false;
        let UserInfo;
        const id = req.params.id
        const cache = new CacheService().cache
        try {
            const cacheResults = await cache.get(id)
            if (cacheResults) {
                isCached = true;
                UserInfo = JSON.parse(cacheResults);
            } else {
                UserInfo = await UserRepo.findOneBy({
                    id: Number(id)
                })
                cache.set(id, JSON.stringify(UserInfo), {
                    EX: 180,
                    NX: true,
                })
            }
            JSONResponse.Response(req, res, "", { UserInfo, isCached }, 200)
        } catch (error: any) {
            JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }

    }
    /**
     * Requests a new verification code.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {Promise<void>} A promise that resolves when the code is resent.
     */
    async RequestNewVerificationCode(req: Request, res: Response): Promise<void> {
        try {
            if (!req.body.email) {
                throw new Error("Please Provide Email");
            }
            const getUser = await this.CheckUserExistorNot(req.body.email) as Member
            const GeneratedToken = Helpers.CreateOTP().toString()
            const Tokens = new TokenEntitiy()
            Tokens.token = GeneratedToken
            Tokens.expiresAt = new Date(Date.now() + 600)
            Tokens.user = getUser
            await TokenRepo.save(Tokens)
            const URL = `${process.env.FRONTEND_URL}/email-verification/${GeneratedToken}`
            const PrepareTemplate = EmailVerification(process.env.APP_IMG_URL as string, URL)
            Email.TemplateMail({ to: req.body.email, subject: "Account Activation", html: PrepareTemplate, text: "", from: "Account Jobcy" })
            return JSONResponse.Response(req, res, "Code Resent, Please Check Your Email", {}, 200)

        } catch (error: any) {
            return JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
    /**
     * Perform a login operation using OTP.
     *
     * @return {Promise<void>} - A promise that resolves when the login operation is completed.
     */
    async LoginViaOTP(): Promise<void> {

    }
    /**
     * Handles the Google authentication callback.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     */
    HandleGoogleAuthCallback(req: Request, res: Response) {

    }
    /** Handles the Change User Password
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {Promise<void>} This function does not return anything.
     */
    async ChnagePassword(req: Request, res: Response): Promise<void> {
        try {
            if (!req.body.userId) {
                throw new Error("Please Provide User Id");
            }
            const getUser = await UserRepo.findOneBy({ id: req.body.userId }) as Member
            if (!getUser) {
                throw new Error("User Not Found");
            }
            await UserRepo.update({ id: req.body.userId }, { password: Utils.HashPassword(req.body.newPassword) })
            return JSONResponse.Response(req, res, "Code Resent, Please Check Your Email", {}, 200)

        } catch (error: any) {
            return JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)

        }
    }
    /**
     * Checks if a user exists or not.
     *
     * @param {string} email - The email of the user to check.
     * @return {Promise<Member | null>} A promise that resolves with the user data if the user exists, or undefined if the user does not exist.
     */
    protected async CheckUserExistorNot(email: string): Promise<Member | null> {
        return await UserRepo.findOne({ where: { email } })
    }
    private NewToken(): string {
        return Helpers.generateToken().toString()
    }
} export default new Authentication()