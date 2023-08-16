import express from 'express'
import JSONResponse from '../services/JSONResponse.js'
import { BaseRoutes } from './api/index.js';
import { Authentication } from '../controllers/index.js';
import { Middlewares } from '../middlewares/index.js';

export class Routes {
    public router: express.Router;
    constructor() {
        this.router = express.Router();
        this.AuthRoutes();
        this.PublicRoutes();
        this.ProtectedRoutes();
        this.UnhandledRoutes();
    }

    /**
     * Initializes the routes for user authentication.
     *
     * @return {void} This function does not return anything.
     */
    private AuthRoutes(): void {
        this.router.post("/login", Authentication.default.Login)
        this.router.post("/register", Authentication.default.Register)
        this.router.post("/forget-password", Authentication.default.ForgetPassword)
        this.router.get("/token/:id", Authentication.default.RefreshToken)
        this.router.get("/current-user/:id", Authentication.default.CurrentUser)
        this.router.get("/g/auth", Authentication.default.HandleGoogleAuthCallback)
    }
    /**
     * All Other Routes which are publicly accessable and required may or may not some of middlewares
     *     
     * @return {void} description of return value
     */
    private PublicRoutes(): void {
        /** Payment Routes */
        // this.router.post("/payment/initiate-transaction", Authentication.default.HandleGoogleAuthCallback)
        // this.router.post("/payment/response", Authentication.default.HandleGoogleAuthCallback)
    }
    /**
     * Initializes the protected routes for the API.
     *
     * This function adds the necessary middleware to protect the routes of the API. It uses the `isApiProtected` middleware to ensure that only authenticated users can access these routes.
     *
     * @return {void}
     */
    protected ProtectedRoutes(): void {
        this.router.use(Middlewares.isApiProtected)
        this.router.use("/v1", new BaseRoutes(express.Router()).router)
    }
    /**
     * Handles unhandled routes by returning a JSON response with a "Not Found" error message.
     *  
    
     * @return {type} void
     */
    private UnhandledRoutes(): void {
        this.router.use("*", (req, res) => JSONResponse.Response(req, res, "API is Running", { error: "Not Found", code: 404, message: "Unhandled Route" }))
    }

}
