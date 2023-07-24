var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createClient } from "redis";
export class Services {
    constructor() {
        this.cache = createClient({
            password: 'l9GNnvy8Yo0tJFuoJcW2LZHb6itLqcZl',
            socket: {
                host: 'redis-19063.c212.ap-south-1-1.ec2.cloud.redislabs.com',
                port: 19063
            }
        });
        this.ConnectRedisClient();
    }
    ConnectRedisClient() {
        return __awaiter(this, void 0, void 0, function* () {
            this.cache.on("error", (error) => console.error(`Error : ${error}`));
            yield this.cache.connect().then(() => console.log(`Redis Connected Successfully`)).catch((error) => console.error(`Error : ${error}`));
        });
    }
    clearCache() {
        this.cache.flushAll();
    }
    clearHash(hashKey) {
        this.cache.del(JSON.stringify(hashKey));
    }
    env(str) {
        return process.env[str];
    }
}
