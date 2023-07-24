import { Router } from 'express'
import { Middlewares } from '../../middlewares/index.js';
import { Test } from '../../controllers/index.js';


export class BaseRoutes {
    public router: Router;
    constructor(router: Router) {
        this.router = router;
        this.PrivateRoutes()
    }

    protected PrivateRoutes() {
        // this.router.use(Middlewares.isAuthenticated)
        this.router.get("/test",Test.default.CheckRoute)
    }

}