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

const ExpiresIn = process.env.JWT_EXPIRES
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
            const LoginInfo = { id: isUser.id, name: isUser.fullname, username: isUser.username, avatar: isUser.image, type: isUser.account, profileStatus: isUser.profileStatus }
            const Token = jwt.sign(LoginInfo, SECRET_KEY, { expiresIn: ExpiresIn })
            const RefreshToken = Helpers.HandleRefreshToken(isUser.id)

            res.cookie("token", Token, { domain: process.env.APP_DOMAIN, expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            res.cookie("refresh_token", RefreshToken, { domain: process.env.APP_DOMAIN, expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            return JSONResponse.Response(req, res, "Login Successful ,Redirecting...", { User: LoginInfo, Token, RefreshToken }, 200)

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

            const username = req.body.name.toLowerCase().split(" ")[0] + Utils.CreateUserID().slice(0, 5)
            const HashedPassword = Utils.HashPassword(req.body.password)

            // create custom userid 
            const UserInfo = { username, fullname: req.body.name, email: req.body.email, password: HashedPassword } // user object
            const CreatUser = await UserRepo.save(UserInfo)
            await UserMoreInfo.save({ member: CreatUser })
            const LoginInfo = {
                id: CreatUser.id,
                name: CreatUser.fullname, username: CreatUser.username, avatar: CreatUser.image,
                type: CreatUser.account, profileStatus: CreatUser.profileStatus
            }
            // query to insert into database
            const Token = jwt.sign(LoginInfo, SECRET_KEY, { expiresIn: ExpiresIn })// jwt token sign
            const RefreshToken = Helpers.HandleRefreshToken(LoginInfo.id) // refresh token
            const WelcomeMsg = WelcomeMessage("http://localhost:7132/_static/jobcy/images", username)
            Email.TemplateMail({ to: req.body.email, subject: "Account Created", html: WelcomeMsg, text: "", from: "Account Jobcy" })
            return JSONResponse.Response(req, res, "User Register Successully", { User: LoginInfo, Token, RefreshToken }, 200)

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
    async RefreshToken(req: Request, res: Response): Promise<void> {
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
                        const isUser = await UserRepo.findOneBy({ username: req.params.id }) as Member
                        const LoginInfo = { id: isUser.id, name: isUser.fullname, username: isUser.username, avatar: isUser.image, type: isUser.account, profileStatus: isUser.profileStatus }
                        const Token = jwt.sign(LoginInfo, SECRET_KEY, { expiresIn: ExpiresIn }) // jwt token sign           
                        return JSONResponse.Response(req, res, "Refresh Token Generated", { refresh_token: RefreshToken, token: Token }, 200)
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

        try {
            const cacheResults = await CacheService.cache.get(id)
            if (cacheResults) {
                isCached = true;
                UserInfo = JSON.parse(cacheResults);
            } else {
                UserInfo = await UserRepo.findOneBy({
                    id: Number(id)
                })
                CacheService.cache.set(id, JSON.stringify(UserInfo), {
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
    /**
     * Generates a new token to reset password.
     *
     * @return {string} The generated token.
     */
    protected NewToken(): string {
        return Helpers.generateToken().toString()
    }
    /**
     * Generates a signed JWT token for the given login information.
     *
     * @param {any} LoginInfo - The login information to be used for generating the token.
     * @return {string} The generated JWT token.
     */
    protected TokenSignJWT(LoginInfo: any): string {

        return jwt.sign(LoginInfo, SECRET_KEY, { expiresIn: ExpiresIn })
    }
} export default new Authentication()