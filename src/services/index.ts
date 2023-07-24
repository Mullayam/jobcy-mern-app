import { createClient } from "redis";
import type { RedisClientType } from "redis";

export class Services {
  public cache: RedisClientType;
  constructor() {
    this.cache = createClient({
      password: 'l9GNnvy8Yo0tJFuoJcW2LZHb6itLqcZl',
      socket: {
        host: 'redis-19063.c212.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 19063
      }
    });
    this.ConnectRedisClient()
  }

  private async ConnectRedisClient() {
    this.cache.on("error", (error: any) => console.error(`Error : ${error}`));
    await this.cache.connect().then(() => console.log(`Redis Connected Successfully`)).catch((error: any) => console.error(`Error : ${error}`));
  }
  clearCache() {
    this.cache.flushAll();
  }
  clearHash(hashKey:string) {
    this.cache.del(JSON.stringify(hashKey));
  }

  env(str: string) {
    return process.env[str];
  }
}