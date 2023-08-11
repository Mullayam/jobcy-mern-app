import { GraphQL_Server } from '../factory/index.js'
import { AppDataSource } from '../DataSource.js'
import { Application } from 'express'
import Logging from '../logging/Logging.js'
export class AppModules {
    public static presql = AppDataSource
    constructor(app: Application) {
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
}