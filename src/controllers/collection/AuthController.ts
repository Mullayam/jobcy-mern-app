import { Request, Response } from 'express'

import JSONResponse from "../../services/JSONResponse.js"
import jwt from 'jsonwebtoken'
import Helpers, { BlacklistedTokens, Tokens } from '../../helpers/index.js'
import { SECRET_KEY } from '../../middlewares/index.js'
import { Services } from "../../services/index.js";
import Utils from '../../utils/index.js' 
import { ForgetPassword } from "../../utils/templates/email/forgot-password.js"
import { WelcomeMessage } from "../../utils/templates/email/welcome-message.js"
import MailService from '../../services/EmailConfiguration.js'

import { Member } from '../../factory/entities/user/member.js'
import { AppDataSource } from '../../DataSource.js'
 
const Email = MailService.getInstance()

class Authentication {
    async Login(req: Request, res: Response){
        try {
            
            if (!req.body.email || !req.body.password) {
                throw new Error("Please Provide Email and Password");
            }
            new Member()
            const isUser = await AppDataSource.manager.findOne(Member,{ where:{email: req.body.email}})

            if (!isUser) {
                throw new Error("User doest not Exist");
            }
            if (!Utils.ComparePassword(isUser.password, req.body.password)) {
                throw new Error("Invalid Credentials");
            }

            const Token = jwt.sign({ id: "testID", name: "mullayam" }, SECRET_KEY, { expiresIn: "3600" })
            const RefreshToken = Helpers.CreateRefreshToken()
            Tokens.set(`${isUser.userId}`, RefreshToken)
            res.cookie("token", Token, { domain: process.env.APP_DOMAIN, expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            res.cookie("refresh_token", RefreshToken, { domain: process.env.APP_DOMAIN, expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            return JSONResponse.Response(req, res, "Login Successful ,Redirecting...", { User: isUser, Token, RefreshToken }, 200)

        } catch (error: any) {
            return JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
    // async Register(req: Request, res: Response) {

    //     try {
    //         // check for errors
    //         if (!req.body.email || !req.body.password || !req.body.name) {
    //             throw new Error("Please Provide Email and Password");
    //         }
    //         // check user exist or not
    //         const isUser = await Member.findOne({ where: { email: req.body.email } })
    //         if (isUser) {
    //             throw new Error("User Already Exist");
    //         }
    //         const userID = Utils.CreateUserID()
    //         const username = req.body.name.toLowerCase().split(" ")[0] + userID.slice(0, 5)
    //         const HashedPassword = Utils.HashPassword(req.body.password)

    //         // create custom userid
    //         const UserInfo = { userId: userID, username, fullname: req.body.name, email: req.body.email, password: HashedPassword } // user object
    //         // await Member.create(UserInfo)
            
    //        // query to insert into database
    //         const Token = jwt.sign({ id: userID, username, }, SECRET_KEY, { expiresIn: "24h" }) // jwt token sign
    //         const RefreshToken = Helpers.CreateRefreshToken() // refresh token
    //         Tokens.set(userID, RefreshToken)
    //         res.cookie("token", Token, { domain: process.env.APP_DOMAIN, expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
    //         res.cookie("refresh_token", RefreshToken, { domain: process.env.APP_DOMAIN, expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
    //         JSONResponse.Response(req, res, "User Register Successully", { Token, RefreshToken }, 200)
    //         // await SendEmail(req.body.email, "Reset Password", "Reset Password", "Reset Password")
    //         return

    //     } catch (error: any) {
    //         return JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
    //     }
    // }
    // async ForgetPassword(req: Request, res: Response): Promise<Response | void> {
    //     try {
    //         // check for errors
    //         if (!req.body.email) {
    //             throw new Error("Please Provide Email");
    //         }
    //         // check user exist or not
    //         const isUser = await presql.findOne({ table: "member", where: { email: req.body.email } })
    //         if (isUser.length === 0) {
    //             throw new Error("User doesn't not Exist");
    //         }
    //         JSONResponse.Response(req, res, "Email Sent", {}, 200)
    //         const ForgetPasswordTemplate = ForgetPassword("http://localhost:7132/_static/jobcy/images", req.body.email)
    //         Email.SendEmail(req.headers["X-Request-ID"] as string, { html: ForgetPasswordTemplate, to: req.body.email, subject: "Reset Password", })
    //         res.end()
    //     } catch (error: any) {
    //         return JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)

    //     }
    // }
    // RefreshToken(req: Request, res: Response) {
    //     try {
    //         if (!req.params.id) {
    //             throw new Error("Id is Required Parameter");
    //         }
    //         if (!req.query.refresh_token) {
    //             throw new Error("Please Provide Previously Generated Refresh Token");
    //         }
    //         if (BlacklistedTokens.includes(req.query.refresh_token as string)) {
    //             throw new Error("This Token is Already Used in Please Login Again");
    //         } else {
    //             if (Tokens.has(req.params.id)) {
    //                 if (Tokens.get(req.params.id) === req.query.refresh_token) {
    //                     BlacklistedTokens.push(req.query.refresh_token as string)
    //                     const RefreshToken = Helpers.HandleRefreshToken(req.params.id)
    //                     res.cookie("refresh_token", RefreshToken, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
    //                     return JSONResponse.Response(req, res, "Refresh Token Generated", { message: RefreshToken }, 200)
    //                 }
    //             }
    //             else {
    //                 throw new Error("There is no Refresh Token Found Please Login Again");
    //             }
    //         }
    //     } catch (error: any) {
    //         return JSONResponse.Error(req, res, "Something Went Wrong", { message: error.message }, 403)
    //     }
    // }
    // async CurrentUser(req: Request, res: Response) {
    //     let isCached = false;
    //     let UserInfo;
    //     const id = req.params.id
    //     const cache = new Services().cache
    //     try {
    //         const cacheResults = await cache.get(id)
    //         if (cacheResults) {
    //             isCached = true;
    //             UserInfo = JSON.parse(cacheResults);
    //         } else {
    //             UserInfo = await Member.findOneBy({
    //                 userId: Number(id)
    //             })
    //             cache.set(id, JSON.stringify(UserInfo), {
    //                 EX: 180,
    //                 NX: true,
    //             })
    //         }
    //         JSONResponse.Response(req, res, "", { UserInfo, isCached }, 200)
    //     } catch (error: any) {
    //         JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
    //     }

    // }
    HandleGoogleAuth(req: Request, res: Response) {

    }
    protected async CheckUserExistorNot(email: string): Promise<any> {
        return  await AppDataSource.manager.findOne(Member,{ where:{email}})
 
    }
} export default new Authentication()