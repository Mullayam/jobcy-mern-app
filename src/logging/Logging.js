var _a;
import chalk from 'chalk';
class Logging {
}
_a = Logging;
// public static log = (args:any)=> this.info(args);
Logging.log = (args) => _a.info(args);
Logging.info = (args) => console.log(chalk.blue(`[${new Date().toLocaleString()}][INFO]`), typeof args === 'string' ? chalk.blueBright(args) : args);
Logging.warn = (args) => console.log(chalk.yellow(`[${new Date().toLocaleString()}][INFO]`), typeof args === 'string' ? chalk.yellowBright(args) : args);
Logging.error = (args) => console.log(chalk.red(`[${new Date().toLocaleString()}][INFO]`), typeof args === 'string' ? chalk.redBright(args) : args);
export default Logging;
