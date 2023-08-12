import bodyParser from "body-parser";
import express, { Application, } from 'express'
// import { Routes } from './routers/index.js' 
import { AppModules } from './app/bootstrap.js';
import Logging from './logging/Logging.js';
import { ProductionModules } from './services/Production.js';
import { HttpException } from "./app/libs/HttpException.js";

export class AppServer {
    protected app: Application;

    constructor(private PORT: number = 7132) {
        this.app = express()
        this.PORT = PORT
        this.config()
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
     * Initializes the routes for the application.
     *
     * This function is responsible for mapping the routes and setting up the necessary endpoints.
     * It sets up a GET endpoint for the root URL ('/') which returns a JSON response with a status,
     * code, and message indicating that the API is running successfully.
     * 
     * @private
     * @memberof ClassName
     * @return {void}
     */
    private InitializeRoutes(): void {
        Logging.preview("Routes Mapped")
        this.app.get('/', (req, res) => {
            throw new HttpException({ name: "PARTIAL_CONTENT", message: "test" })
            // res.status(200).json({ status: true, code: 200, message: "Api is Running Successfully" });
        })
        // this.app.use('/api', new Routes().router)
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
