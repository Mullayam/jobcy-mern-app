import url from 'url'
import path from 'path';
import cors from 'cors';
import bodyParser from "body-parser";
import express, { Application, Request, Response, NextFunction } from 'express'
// import { Routes } from './routers/index.js'
import { Middlewares } from './middlewares/index.js'
import Helpers from './helpers/index.js';
import { Clusters } from './services/CorePerformance.js'; 
import { AppModules } from './app/bootstrap.js';
import Logging from './logging/Logging.js';
import { HttpException } from './services/HttpException.js';
export class AppServer {
    protected app: Application;

    constructor(private PORT: number = 7132) {        
        this.app = express()
        this.PORT = PORT
        this.config()
        this.InitializeMiddlewares()
        this.InitializeRoutes()
        this.ExceptionHandling()
         
    }   
     private config(): void {
        Logging.preview("Applying Configuration")
        this.app.use(express.json());
        this.app.use(cors({
            origin: '*',
            methods: ["GET","PUT","PATCH","POST","DELETE"],
        }))
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use("/_static/jobcy/images",express.static(path.join(process.cwd(), 'public',"images")));
        this.app.use("/_static/jobcy/user/profile",express.static(path.join(process.cwd(), 'public',"uploads")));
        this.LoadInstances()
      
    }
    private InitializeMiddlewares() {
        Logging.preview("Middlewares Applied")
        this.app.get('/first', (req, res) => {
            res.status(200).json({ status: true, APP_KEY: Helpers.generateToken(), message: "APP KEY/SECRET Generated Successfully, Go to .env file and add APP_KEY, Restart Server" });
        })
        this.app.use(Middlewares.MiddlewareFunction);
        if (process.env.APP_ENV === "PRODUCTION") {
            this.app.use(express.static(path.join(process.cwd(), 'frontend',"build")));
        }
    }
    private LoadInstances() {
        new AppModules(this.app)
    }
    private InitializeRoutes(): void {
        Logging.preview("Routes Mapped")
        this.app.get('/', (req, res) => {
            res.status(200).json({ status: true, code: 200, message: "Api is Running Successfully" });
        })
        // this.app.use('/api', new Routes().router)
        if (process.env.APP_ENV === "PRODUCTION") {
            this.app.use("*", (req, res) => {
                const pathname = url.parse(req.url).pathname as string;
                const myUrlWithParams = new URL(process.env.APP_URL as string);
                myUrlWithParams.searchParams.append("redirect_uri", pathname);
                res.redirect(`/${myUrlWithParams.search}`);
            });
        }
    }
    private ExceptionHandling() {
        Logging.preview("Exception Handling Applied")
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.log(err)
            if (err) HttpException.ExceptionHandler(err, req, res, next)
            next()
        })
    }
    private IntializeAppServer() {        
        this.app.listen(this.PORT, () => Logging.log("App Started at http://localhost:7132"))
    }
    RunApplication() {
        Logging.preview("App is Ready")
        if (process.env.APP_ENV === "PRODUCTION") {
            new Clusters().Workers(() => this.IntializeAppServer())
        }
        this.IntializeAppServer()
    }
}
