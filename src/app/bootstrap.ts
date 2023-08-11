import cors from 'cors';

import { Application } from 'express'
import helpers from '../helpers/index.js'
import Logging from '../logging/Logging.js'
import { GraphQL_Server } from '../factory/index.js'
import { AppDataSource } from '../DataSource.js'
import { Middlewares } from '../middlewares/index.js'
export class AppModules {
    public static presql = AppDataSource
    private app: Application
    constructor(app: Application) {
        this.app = app
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
            })
            .catch((error) => console.log(error))
    }
    private InjectDependencies() {
        Logging.preview("Dependencies Injected")
        this.app.use(cors({
            origin: '*',
            methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
        }))

    }
    private InitializeMiddlewares() {
        Logging.preview("Middlewares Applied")
        this.app.get('/first', (req, res) => {
            res.status(200).json({ status: true, APP_KEY: helpers.generateToken(), message: "APP KEY/SECRET Generated Successfully, Go to .env file and add APP_KEY, Restart Server" });
        })
        this.app.use(Middlewares.MiddlewareFunction);
        // if (process.env.APP_ENV === "PRODUCTION") {
        //     this.app.use(express.static(path.join(process.cwd(), 'frontend',"build")));
        // }
    }
}