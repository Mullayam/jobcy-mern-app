import { Test } from '../../controllers/index.js';
export class BaseRoutes {
    constructor(router) {
        this.router = router;
        this.PrivateRoutes();
    }
    PrivateRoutes() {
        // this.router.use(Middlewares.isAuthenticated)
        this.router.get("/test", Test.default.CheckRoute);
    }
}
