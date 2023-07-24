import url from 'url'
import path from 'path';
import cors from 'cors';
import bodyParser from "body-parser";
import express, { Application } from 'express'
import { Routes } from './routers/index.js'
import { Middlewares } from './middlewares/index.js'
import Helpers from './helpers/index.js';
import { Clusters } from './services/CorePerformance.js';

export class AppServer {
    private app: Application;

    constructor(private PORT: number = 7132) {
        this.app = express()
        this.PORT = PORT
        this.config()
        this.InitializeMiddlewares()
        this.InitializeRoutes()
    }
    private config(): void {
        this.app.use(express.json());
        this.app.use(cors({
            origin: '*',
            methods: ["GET","PUT","PATCH","POST","DELETE"],
        }))
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use("/_static/jobcy/images",express.static(path.join(process.cwd(), 'public',"images")));
    }
    private InitializeMiddlewares() {
        this.app.get('/first', (req, res) => {
            res.status(200).json({ status: true, APP_KEY: Helpers.generateToken(), message: "APP KEY/SECRET Generated Successfully, Go to .env file and add APP_KEY, Restart Server" });
        })
        this.app.use(Middlewares.MiddlewareFunction);
        if (process.env.APP_ENV === "PRODUCTION") {
            this.app.use(express.static(path.join(process.cwd(), 'build')));
        }
    }
    private InitializeRoutes(): void {
        this.app.get('/', (req, res) => {
            res.status(200).json({ status: true, code: 200, message: "Api is Running Successfully" });
        })
        this.app.use('/api', new Routes().router)
        if (process.env.APP_ENV === "PRODUCTION") {
            this.app.use("*", (req, res) => {
                const pathname = url.parse(req.url).pathname as string;
                const myUrlWithParams = new URL(process.env.APP_URL as string);
                myUrlWithParams.searchParams.append("redirect_uri", pathname);
                res.redirect(`/${myUrlWithParams.search}`);
            });
        }
    }
    private IntializeAppServer() {
        this.app.listen(this.PORT, () => console.log("App Started at http://localhost:7132"))
    }
    RunApplication() {
        if (process.env.APP_ENV === "PRODUCTION") {
            new Clusters().Workers(() => this.IntializeAppServer())
        }
        this.IntializeAppServer()
    }
}
