import path from 'path';
import { Application } from 'express'
import helpers from '../helpers/index.js'
import Logging from '../logging/Logging.js'
import { AppDataSource } from '../DataSource.js'
import { Middlewares } from '../middlewares/index.js'
import { UnprotectedRoutes } from '../routers/api/UnprotectRoutes.js';
import { Engine } from './modules/engine.js';

export class AppModules {
    public static TypeORM = AppDataSource   
    private express: any
    constructor(private app: Application, express: any) {
        this.app = app
        this.express = express
        this.AppEngine()
        this.InitializeMiddlewares()
        this.TypeORM_Datasource()
    }   
    /**
     * Initializes the TypeORM Datasource.
     * Establish Database Connection
     * 
     * @private
     * @async
     * @return {Promise<void>} Promise that resolves once the datasource is initialized.
     */
    private async TypeORM_Datasource(): Promise<void> {
        AppModules.TypeORM.initialize()
            .then(() => {
                Logging.alert("Database Connected Successfuly")
                this.app.emit("ready", "Intiating Application Server")
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

    /**
     * Initializes the AppEngine.
     *
     * @private
     */
    private AppEngine() {
        new Engine()
        this.app.use(new UnprotectedRoutes().router)
    }
    /**
     * Initialize the middlewares for the application.
     *
     * @private
     * @return {void}
     */
    private InitializeMiddlewares(): void {
        Logging.preview("Middlewares Applied")
        this.app.get('/first', (req, res) => {
            res.status(200).json({ status: true, APP_KEY: helpers.generateToken(), message: "APP KEY/SECRET Generated Successfully, Go to .env file and add APP_KEY, Restart Server" });
        })
        if (process.env.APP_ENV === "PRODUCTION") {
            this.app.use(this.express.static(path.join(process.cwd(), 'frontend', "build")));
        }
        this.app.use(Middlewares.MiddlewareFunction);
    }
    /**
     * Defines the routes for third-party authentication.
     *
     * @private
     * @returns {void}
     */

}