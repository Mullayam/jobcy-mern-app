import url from 'url'
import path from 'path';
import bodyParser from "body-parser";
import express, { Application, Request, Response, NextFunction } from 'express'
// import { Routes } from './routers/index.js' 
import { Clusters } from './services/CorePerformance.js';
import { AppModules } from './app/bootstrap.js';
import Logging from './logging/Logging.js';
import { Production } from './services/Production.js';
import { HttpException } from './services/HttpException.js';

export class AppServer {
    protected app: Application;

    constructor(private PORT: number = 7132) {
        this.app = express()
        this.PORT = PORT
        this.config()
        this.InitializeRoutes()
        this.LoadInstances()

    }
    private config(): void {
        Logging.preview("Applying Configuration")
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

    }

    private LoadInstances() {
        new AppModules(this.app, express)
        new Production(this.app)
    }
    private InitializeRoutes(): void {
        Logging.preview("Routes Mapped")
        this.app.get('/', (req, res) => {
            res.status(200).json({ status: true, code: 200, message: "Api is Running Successfully" });
        })
        // this.app.use('/api', new Routes().router)
    }
    private IntializeAppServer() {
        this.app.listen(this.PORT, () => Logging.log("App Started at http://localhost:7132"))
    }
    RunApplication() {
        Logging.preview("App is Ready")

            new Clusters().Workers(() => this.IntializeAppServer())
       
        this.app.on('error', err => Logging.error(err))
        this.app.on('ready', (err) => {
            Logging.info(err)
            this.IntializeAppServer()
        })

    }
}
