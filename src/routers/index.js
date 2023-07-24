import express from 'express';
import JSONResponse from '../services/JSONResponse.js';
import { BaseRoutes } from './api/index.js';
import { Authentication } from '../controllers/index.js';
import { Middlewares } from '../middlewares/index.js';
export class Routes {
    constructor() {
        this.router = express.Router();
        this.PublicRoutes();
        this.ProtectedRoutes();
        this.UnhandledRoutes();
    }
    PublicRoutes() {
        this.router.post("/login", Authentication.default.Login);
        this.router.post("/register", Authentication.default.Register);
        this.router.post("/forget-password", Authentication.default.ForgetPassword);
        this.router.get("/token/:id", Authentication.default.RefreshToken);
        this.router.get("/current-user", Authentication.default.CurrentUser);
        this.router.get("/g/auth", Authentication.default.HandleGoogleAuth);
    }
    ProtectedRoutes() {
        this.router.use(Middlewares.isApiProtected);
        this.router.use("/v1", new BaseRoutes(express.Router()).router);
    }
    UnhandledRoutes() {
        this.router.use("*", (req, res) => JSONResponse.Response(req, res, "API is Running", { error: "Not Found", code: 404, message: "Unhandled Route" }));
    }
}
