import { Request, Response } from "express";
 
class JSONResponse {

    static Response(req: Request, res: Response, message: string="success", data: any={},code: number = 200) {
       res.status(code).json({
            success: true,
            message: message  ,
            data: data,
        });
    }

    static Error(req: Request, res: Response, message: string, data: any={},code: number = 500) {
          res.status(code).json({
            success: false,
            message: message || 'internal server error',
            data: data,
        });
    }
}

export default JSONResponse;