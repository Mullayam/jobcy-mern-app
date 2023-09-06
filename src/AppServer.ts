import cors from 'cors'
import path from 'path'; 
import bodyParser from "body-parser";
import express, { Application, } from 'express'
import { Routes } from './routers/index.js'
import { AppModules } from './app/bootstrap.js';
import Logging from './logging/Logging.js';
import { ProductionModules } from './services/Production.js';
import { HttpException } from "./app/libs/HttpException.js";
import { ExpressMiddlewareOptions, expressMiddleware } from '@apollo/server/express4';

export class AppServer {
    protected app: Application;

    constructor(private PORT: number = 7132) {
        this.app = express()
        this.PORT = PORT
        this.config()        
        this.InjectDependencies()
        this.InitializeRoutes()
        this.LoadInstances()
    }
    /**
     * Configures the application by applying necessary settings.
     *
     * This function sets up the application by configuring certain settings such as enabling JSON parsing and URL encoding.
     * It is called during the initialization of the application.
     */
    private config(): void {
        Logging.preview("Applying Configuration")
        this.app.use(express.json());
        this.app.use(cors({ origin: "*" }));
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    /**
     * Loads the instances of the AppModules and ProductionModules.
     */
    private LoadInstances(): void {
        new AppModules(this.app, express)
        new ProductionModules(this.app)
    }
    /**
    * Initializes the GraphQL server.
    *
    * @return {Promise<void>} A promise that resolves when the server is initialized.
    */
     async InitializeGraphQlServer():Promise<ExpressMiddlewareOptions<{}>> {
        Logging.preview("Initializing GraphQL Server")
        return   {
                context: async ({ req, res }) => {
                    // Get the user token from the headers.
                    const token = req.headers.authorization || '';

                    // Try to retrieve a user with the token
                    // const user = await getUser(token);
                    console.log("context")
                    // Add the user to the context
                    return { test: token };
                }
            }
    }
    /**
     * Injects the dependencies needed for the application.
     *
     * @private
     * @return {void}
     */
    private InjectDependencies():void {
        Logging.preview("Dependencies Injected")     

        this.app.use("/_static/jobcy/images", express.static(path.join(process.cwd(), 'public', "images")));
        this.app.use("/_static/jobcy/user/profile", express.static(path.join(process.cwd(), 'public', "uploads")));
    }
    /**
     * Initializes the routes for the application.
     *
     * This function is responsible for mapping the routes and setting up the necessary endpoints.
     * It sets up a GET endpoint for the root URL ('/') which returns a JSON response with a status,
     * code, and message indicating that the API is running successfully.
     * 
     * @private
     * @memberof ClassName     
     */
    private async InitializeRoutes() {
        Logging.preview("Routes Mapped")
        this.app.use('/api', new Routes().router)
         
        this.app.use('*', () => new HttpException({ name: "NOT_FOUND", message: "Route Not Found", stack: { notice: "Api is Running", api_status_code: 200, info: "Unhandled Route Detected" } }))
    }
    /**
     * Initializes the app server and starts listening on the specified port.
     *
     * @private
     * @return {void} 
     */
    private IntializeAppServer(): void {
        this.app.listen(this.PORT, () => Logging.log("App Started at http://localhost:7132"))
    }
    /**
     * Runs the application.
     * @return {void} description of return value
     */
    RunApplication(): void {
        Logging.preview("App is Ready")
        // new Clusters().Workers(() => this.IntializeAppServer())       
        this.app.on('error', err => Logging.error(err))
        this.app.on('ready', (err) => {
            Logging.info(err)
            this.IntializeAppServer()
        })

    }

}
