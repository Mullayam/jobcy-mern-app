import * as os from "os";
import cluster from "cluster";
import Logging from "../logging/Logging.js";
const clusterWorkerSize = os.cpus().length;
export class Clusters {
    Workers(RunApplication: () => void) {
        if (process.env.APP_ENV === "PRODUCTION" && process.env.CLUSTERS === "true") {
            if (cluster.isPrimary) {
                Logging.log(`Main Instance ${process.pid} is running`);
                // Fork workers.
                for (let i = 0; i < clusterWorkerSize; i++) {
                    cluster.fork();
                }
                cluster.on("exit", function (worker, code, signal) {
                    const msg = "Worker " + worker.id + " has exited with signal " + signal
                    Logging.alert(msg)
                    if (code !== 0 && !worker.exitedAfterDisconnect) {
                        cluster.fork();
                    }
                });
            } else {
                RunApplication()
            }
        }
    }
}