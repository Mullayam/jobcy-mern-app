import chalk from 'chalk';

export default class Logging {

    public static log = (args: any) => this.info(args)
    public static info = (args: any) => console.log(chalk.blue(`[${new Date().toLocaleString()}][INFO]`),
        typeof args === 'string' ? chalk.blueBright(args) : args);

    public static warn = (args: any) => console.log(chalk.yellow(`[${new Date().toLocaleString()}][WARN]`),
        typeof args === 'string' ? chalk.yellowBright(args) : args);

    public static error = (args: any) => console.log(chalk.red(`[${new Date().toLocaleString()}][ERROR]`),
        typeof args === 'string' ? chalk.redBright(args) : args);
    public static debug = (args: any) =>{
        console.log(chalk.bgGray(`[${new Date().toLocaleString()}][DEBUG] ${typeof args === 'string' ? chalk.white(args) : args}`))
    }
    public static preview = (args: any) =>{
        console.log(chalk.yellow(`[${new Date().toLocaleString()}][PREVIEW] ${typeof args === 'string' ? chalk.magenta(args) : args}`))
    }
    public static alert = (args: any) =>{
        console.log(chalk.yellow(`[${new Date().toLocaleString()}][PREVIEW] ${typeof args === 'string' ? chalk.yellow(args) : args}`))
    } 
}