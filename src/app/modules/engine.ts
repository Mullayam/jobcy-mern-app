import { Kernel } from "./kernel.js";
import { CacheService } from "./cache.js";
import Logging from "../../logging/Logging.js";



export class Engine {

    constructor(){
        Logging.preview("Initializing App Engine Cache/Kernel Services ");
        new CacheService()
        Kernel.prototype.InitiaitePaytmInstance();
    }
}