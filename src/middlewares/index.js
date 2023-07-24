var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "jsonwebtoken";
import Helpers from "../helpers/index.js";
export const SECRET_KEY = `${process.env.JWT_SECRET_TOKEN}`;
export class Middlewares {
    //  Check App Variable is Generated or not
    static MiddlewareFunction(req, res, next) {
        try {
            if (typeof process.env.APP_SECRET === "undefined" || process.env.APP_SECRET === "") {
                throw new Error("Server cannnot be Started without APP KEY/APP_SECRET means all routes are not accessible");
            }
            res.setHeader('Api-Version', 'v1');
            next();
        }
        catch (error) {
            res.send({
                success: false,
                error: error.message,
                message: "Please Generate App Secret First, " + `http://${req.headers.host}/first`,
            });
        }
    }
    // check user account is active or not
    static isAccountActivated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // get token from headers
                const loggedUserInfo = req.get("loggedUserInfo");
                if (typeof loggedUserInfo === "undefined") {
                    throw new Error("User Info is manipulated or not available");
                }
                // const User = await UserModel.findOne({ _id: loggedUserInfo.userId });
                // if (!User) {
                //   throw new Error("User Doest not exist");
                // }
                // if (!User.status === "0x0000") {
                //   throw new Error(
                //     `This Account is not Activated, Please Contact the administrator`
                //   );
                // }
                // if (loggedUserInfo.userRole !== User.role) {
                //   throw new Error("User is not allowed to perform this action");
                // }
                next();
            }
            catch (error) {
                res.send({
                    success: false,
                    message: error.message,
                });
            }
        });
    }
    // check user is authenticated or not
    static isAuthenticated(req, res, next) {
        console.log("AUTHENTICATION MIDDLEWARE");
        try {
            // get token from headers
            const AuthToken = req.get("Authorization");
            if (typeof AuthToken === "undefined") {
                throw new Error("Invalid Auth Token");
            }
            const token = AuthToken.split(" ")[1];
            if (SECRET_KEY === "undefined" || SECRET_KEY === "") {
                throw new Error("JWT SECRET TOKEN is required");
            }
            const DecryptToken = jwt.verify(token, SECRET_KEY);
            req.body.user = DecryptToken;
            console.log(DecryptToken);
            // req.body.user = {
            //   userId: DecryptToken.id,
            //   userEmail: DecryptToken.email,
            //   userRole: DecryptToken.role,
            //   userStatus: DecryptToken.status,
            // };
            next();
        }
        catch (error) {
            res.send({
                success: false,
                message: error.message,
            });
        }
    }
    //  check api key from frontend is valid or not
    static isApiProtected(req, res, next) {
        try {
            console.log("Checking API KEY");
            const headers = req.headers;
            const apiKey = headers["api_key"] || undefined;
            if (typeof apiKey === "undefined") {
                return res.status(404).json({
                    return: false,
                    status_code: 404,
                    message: "API_KEY is Required",
                });
            }
            if (apiKey !== process.env.API_KEY) {
                return res.status(401).json({
                    return: false,
                    status_code: 412,
                    message: "Invalid KEY, Check API KEY",
                });
            }
            next();
        }
        catch (error) {
            res.send({
                success: false,
                message: error.message,
            });
            res.end();
        }
    }
    static IRequestHeaders(req, res, next) {
        const requestId = Helpers.RequestId();
        req.headers['X-Request-Id'] = requestId;
        res.setHeader('X-Request-Id', requestId);
        next();
    }
}
