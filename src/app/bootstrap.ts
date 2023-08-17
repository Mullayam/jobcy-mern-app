import cors from 'cors';
import path from 'path';
import { Application } from 'express'
import helpers from '../helpers/index.js'
import Logging from '../logging/Logging.js'
import { GraphQL_Server } from '../factory/index.js'
import { AppDataSource } from '../DataSource.js'
import { Middlewares } from '../middlewares/index.js'
import { expressMiddleware } from '@apollo/server/express4';
import { UnprotectedRoutes } from '../routers/api/UnprotectRoutes.js';
import { Engine } from './modules/engine.js';

export class AppModules {
    public static presql = AppDataSource
    private app: Application
    private express: any
    constructor(app: Application, express: any) {
        this.app = app
        this.express = express
        this.AppEngine()
        this.InjectDependencies()
        this.InitializeMiddlewares()
        this.InitializeGraphQlServer()
        this.TypeORM_Datasource()
    }
    /**
     * Initializes the GraphQL server.
     *
     * @return {Promise<void>} A promise that resolves when the server is initialized.
     */
    private async InitializeGraphQlServer(): Promise<void> {
        Logging.preview("Initializing GraphQL Server")
        await GraphQL_Server.start()
        this.app.use("/graphql", expressMiddleware(GraphQL_Server,
            //  {
            //     context: async ({ req, res }) => {
            //         // Get the user token from the headers.
            //         const token = req.headers.authorization || '';

            //         // Try to retrieve a user with the token
            //         // const user = await getUser(token);
            //         console.log("context")
            //         // Add the user to the context
            //         return { test: token };
            //     }
            // }
        ))
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
        AppModules.presql.initialize()
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
     * Injects the dependencies needed for the application.
     *
     * @private
     * @return {void}
     */
    private InjectDependencies(): void {
        Logging.preview("Dependencies Injected")
        this.app.use(cors({
            origin: '*',
            methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
        }))
        this.app.use("/_static/jobcy/images", this.express.static(path.join(process.cwd(), 'public', "images")));
        this.app.use("/_static/jobcy/user/profile", this.express.static(path.join(process.cwd(), 'public', "uploads")));


    }
    /**
     * Initializes the AppEngine.
     *
     * @private
     */
    private AppEngine() {
        new Engine()
        new UnprotectedRoutes().router
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
        this.app.use(Middlewares.MiddlewareFunction);
        if (process.env.APP_ENV === "PRODUCTION") {
            this.app.use(this.express.static(path.join(process.cwd(), 'frontend', "build")));
        }
    }
    /**
     * Defines the routes for third-party authentication.
     *
     * @private
     * @returns {void}
     */

}