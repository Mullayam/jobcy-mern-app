import * as os from "os";
import cluster from "cluster";
const clusterWorkerSize = os.cpus().length;
export class Clusters {
    Workers(RunApplication: ()=>void) {
        if (cluster.isPrimary) {
            // Keep track of http requests
            let numReqs = 0;
            console.log(`Main Instance ${process.pid} is running`);
            // Fork workers.
            for (let i = 0; i < clusterWorkerSize; i++) {
                cluster.fork();
            }
            // Count requests
            function messageHandler(msg: any) {
                if (msg.cmd && msg.cmd === "notifyRequest") {
                    numReqs += 1;
                    console.log(`numReqs = ${numReqs}`);
                }
            }
          

            cluster.on("exit", function (worker, code, signal) {
                console.log("Worker", worker.id, "has exited with signal", signal);
                if (code !== 0 && !worker.exitedAfterDisconnect) {
                    cluster.fork();
                }
            });
        }else{
            RunApplication()
        }

    }
}