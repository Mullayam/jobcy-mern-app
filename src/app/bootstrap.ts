import cors from 'cors';

import { Application } from 'express'
import helpers from '../helpers/index.js'
import Logging from '../logging/Logging.js'
import { GraphQL_Server } from '../factory/index.js'
import { AppDataSource } from '../DataSource.js'
import { Middlewares } from '../middlewares/index.js'
import path from 'path';
export class AppModules {
    public static presql = AppDataSource
    private app: Application
    private express: any
    constructor(app: Application, express: any) {
        this.app = app
        this.express = express
        this.InjectDependencies()
        this.InitializeMiddlewares()
        this.InitializeGraphQlServer()
        this.TypeORM_Datasource()
    }
    private async InitializeGraphQlServer() {
        Logging.preview("Initializing GraphQL Server")
        await GraphQL_Server.start()
    }
    private async TypeORM_Datasource() {
        AppModules.presql.initialize()
            .then(() => {
                Logging.alert("Database Connected Successfuly")
                this.app.emit("read", "Intiating Application Server")
            })
            .catch((error) => {
                if (error.code === "ECONNREFUSED") {
                    Logging.error("Your Database (MySQL) Server is not Enabled")
                    this.app.emit("error", "Database Connection Refused, Server Cannot be Started Untill DB connection is Established")
                    return
                }
                console.log(error)
            })
    }
    private InjectDependencies() {
        Logging.preview("Dependencies Injected")
        this.app.use(cors({
            origin: '*',
            methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
        }))
        this.app.use("/_static/jobcy/images", this.express.static(path.join(process.cwd(), 'public', "images")));
        this.app.use("/_static/jobcy/user/profile", this.express.static(path.join(process.cwd(), 'public', "uploads")));

    }
    private InitializeMiddlewares() {
        Logging.preview("Middlewares Applied")
        this.app.get('/first', (req, res) => {
            res.status(200).json({ status: true, APP_KEY: helpers.generateToken(), message: "APP KEY/SECRET Generated Successfully, Go to .env file and add APP_KEY, Restart Server" });
        })
        this.app.use(Middlewares.MiddlewareFunction);
        if (process.env.APP_ENV === "PRODUCTION") {
            this.app.use(this.express.static(path.join(process.cwd(), 'frontend', "build")));
        }
    }
}