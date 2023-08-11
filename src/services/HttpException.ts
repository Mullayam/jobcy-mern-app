import { NextFunction, Response, Request } from 'express';
import { HttpExceptionParams } from '../types/index.js';
import Logging from '../logging/Logging.js';
 
export class HttpException {

    constructor({ name, message, stack }: HttpExceptionParams) {
        Logging.error("New Error Thrown")
        let error = new Error(message);
        error.name = name || "Error";
        error.stack = stack
        throw error
    }
    static ExceptionHandler(err: Error, req: Request, res: Response, next: NextFunction) {
        const errStatus = 500;
        Logging.info("Error Handled")
        const errMsg = err.message || 'Something went wrong';
        res.status(errStatus).send({
            success: false,
            status: errStatus,
            message: err.name,
            stack: process.env.NODE_ENV === 'development' ? err.stack : {}
        })
        next(errMsg)
    }


}