import { Application, Request, Response, NextFunction } from 'express'
import Logging from "../logging/Logging.js";
import { HttpException } from "../app/libs/HttpException.js";
import url from 'url';

export class ProductionModules {

    private app: Application
    constructor(app: Application) {
        this.app = app
        this.ExceptionHandling()
        this.RedirectRoute()
    }
    protected ExceptionHandling() {
        Logging.preview("Exception Handling Applied")
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {            
            if (err) HttpException.ExceptionHandler(err, req, res, next)
            next()
        })
    }
    protected RedirectRoute() {
        if (process.env.APP_ENV === "PRODUCTION") {
            this.app.use("*", (req, res) => {
                const pathname = url.parse(req.url).pathname as string;
                const myUrlWithParams = new URL(process.env.APP_URL as string);
                myUrlWithParams.searchParams.append("redirect_uri", pathname);
                res.redirect(`/${myUrlWithParams.search}`);
            });
        }
    }
}