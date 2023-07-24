class JSONResponse {
    static Response(req, res, message = "success", data = {}, code = 200) {
        res.status(code).json({
            success: true,
            message: message,
            data: data,
        });
    }
    static Error(req, res, message, data = {}, code = 500) {
        res.status(code).json({
            success: false,
            message: message || 'internal server error',
            data: data,
        });
    }
}
export default JSONResponse;
