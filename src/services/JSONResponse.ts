import { Request, Response } from "express";
 
class JSONResponse {

    /**
     * Generate a response for the given request.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @param {string} [message="success"] - The success message.
     * @param {any} [data={}] - The data to be included in the response.
     * @param {number} [code=200] - The status code for the response.
     * @return {void}
     */
    static Response(req: Request, res: Response, message: string="success", data: any={},code: number = 200) {
       res.status(code).json({
            success: true,
            message: message  ,
            data: data,
        });
    }

    /**
     * Creates an error response and sends it back to the client.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @param {string} message - The error message.
     * @param {any} data - Additional data to include in the response.
     * @param {number} code - The HTTP status code to send.
     */
    static Error(req: Request, res: Response, message: string, data: any={},code: number = 500) {
          res.status(code).json({
            success: false,
            message: message || 'internal server error',
            data: data,
        });
    }
}

export default JSONResponse;