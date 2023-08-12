import { NextFunction, Response, Request } from 'express';
import { HttpExceptionParams } from '../../types/index.js';
import Logging from '../../logging/Logging.js';

export class HttpException {
    constructor({ name, message, stack }: HttpExceptionParams) {
        this.ThrowNewException({ name, message, stack })
    }
    /**
 * Throws a new exception with the provided parameters.
 *
 * @param {HttpExceptionParams} name : The name, message, and stack of the exception.
 * @return {void}
 */
    private ThrowNewException({ name, message, stack }: HttpExceptionParams): void {
        Logging.error("New Error Thrown")
        let error = new Error(message);
        error.name = name || "Error";
        error.stack = stack
        throw error
    }
    /**
 * Handles exceptions that occur during the execution of the program.
 *
 * @param {Error} err : The exception that occurred.
 * @param {Request} req : The incoming HTTP request.
 * @param {Response} res : The HTTP response to be sent back.
 * @param {NextFunction} next : The next middleware function in the chain.
 */
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
    /**
  * Creates a new UnauthorizedException with the given payload.
  *
  * @param {HttpExceptionParams} payload : The payload for the exception.
  */
    static UnauthorizedException(payload: HttpExceptionParams) {
        new HttpException(payload)
    }
    private ExceptionsArray() {
        return {
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            307: "Temporary Redirect",
            308: "Resume Incomplete",
            400: "Bad Request",
            401: "Unauthorized",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Payload Too Large",
            416: "Requested Range Not Satisfiable",
            429: "Too Many Requests",
            499: "Client Closed Request",
            500: "intemal Server Error",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
        }
    }
    
    /**
     * Returns a string representing the type of error based on the given code.
     *
     * @param {number} code - The http error status code.
     * @return {string} - The  http error name.
     */
    private TypeOfError(code:number):string {
        return "Not Found"
    }

}