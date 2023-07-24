import { Request, Response } from 'express'
import { presql } from '../../connection/conn.js'
import JSONResponse from "../../services/JSONResponse.js"
import jwt from 'jsonwebtoken'
import Helpers, { BlacklistedTokens, Tokens } from '../../helpers/index.js'
import { SECRET_KEY } from '../../middlewares/index.js'
import { Services } from "../../services/index.js";
import Utils from '../../utils/index.js'
import { LoginResponse } from '../../types/index.js'
// import { SendEmail } from '../../services/EmailConfiguration.js'
class Authentication {
    async Login(req: Request, res: Response): Promise<LoginResponse | void> {
        try {
            if (!req.body.email || !req.body.password) {
                throw new Error("Please Provide Email and Password");
            }
            const isUser = await this.CheckUserExistorNot(req.body.email as string)
            if (isUser.length === 0) {
                throw new Error("User doest not Exist");
            }
            await presql.create({ table: "", data: { email: req.body.email, password: req.body.password } })
            const Token = jwt.sign({ id: "testID", name: "mullayam" }, SECRET_KEY, { expiresIn: "10" })
            const RefreshToken = Helpers.CreateRefreshToken()
            Tokens.set("testID", RefreshToken)
            res.cookie("token", Token, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            res.cookie("refresh_token", RefreshToken, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            return JSONResponse.Response(req, res, "Login Function", { Token, RefreshToken }, 200)
        } catch (error: any) {
            return JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 500)
        }
    }
    async Register(req: Request, res: Response): Promise<LoginResponse | void> {
        try {
            // check for errors
            if (!req.body.email || !req.body.password) {
                throw new Error("Please Provide Email and Password");
            }
            // check user exist or not
            const isUser = await this.CheckUserExistorNot(req.body.email as string)
            if (isUser.length >= 1) {
                throw new Error("User Already Exist");
            }
            const userID = Utils.CreateUserID()  // create custom userid
            const UserInfo = { id: userID, email: req.body.email, password: req.body.password } // user object
            await presql.create({ table: "", data: UserInfo }) // query to insert into database
            const Token = jwt.sign({ id: userID, name: "mullayam" }, SECRET_KEY, { expiresIn: "10" }) // jwt token sign
            const RefreshToken = Helpers.CreateRefreshToken() // refresh token
            Tokens.set(userID, RefreshToken)
            res.cookie("token", Token, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            res.cookie("refresh_token", RefreshToken, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
            return JSONResponse.Response(req, res, "Login Function", { Token, RefreshToken }, 200)
        } catch (error: any) {
            return JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 500)
        }
    }
    async ForgetPassword(req: Request, res: Response): Promise<Response | void> {
        try {
            // check for errors
            if (!req.body.email) {
                throw new Error("Please Provide Email");
            }
            // check user exist or not
            const isUser = await this.CheckUserExistorNot(req.body.email as string)
            if (isUser.length === 0) {
                throw new Error("User doest not Exist");
            }
            JSONResponse.Response(req, res, "Email Sent", {}, 200)
            // await SendEmail(req.body.email, "Reset Password", "Reset Password", "Reset Password")
            res.end()
        } catch (error: any) {
            return JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 500)

        }
    }
    RefreshToken(req: Request, res: Response) {
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
                }
                else {
                    throw new Error("There is no Refresh Token Found Please Login Again");
                }
            }
        } catch (error: any) {
            return JSONResponse.Error(req, res, "Something Went Wrong", { message: error.message }, 403)
        }
    }
    async CurrentUser(req: Request, res: Response) {
        let isCached = false;
        let UserInfo;
        const id = req.body.id
        const cache = new Services().cache
        try {
            const cacheResults = await cache.get(id)
            if (cacheResults) {
                isCached = true;
                UserInfo = JSON.parse(cacheResults);
            } else {
                cache.set(id, JSON.stringify(UserInfo), {
                    EX: 180,
                    NX: true,
                })
            }
            JSONResponse.Response(req, res, "", { UserInfo, isCached }, 200)
        } catch (error: any) {
            JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 403)
        }

    }
    HandleGoogleAuth(req: Request, res: Response) {

    }
    private async CheckUserExistorNot(email: string) {
        return await presql.findOne({ table: "", where: { email } })
    }
} export default new Authentication()