import { Router } from 'express'
import { Middlewares } from '../../middlewares/index.js';
import { Basic, Company, Jobs, Test } from '../../controllers/index.js';


export class BaseRoutes {
    public router: Router;
    constructor(router: Router) {
        this.router = router;
        this.PrivateRoutes()
    }

    protected PrivateRoutes() {
        // Categories
        this.router.get("/all/categories", Basic.default.GetAllCategoriesWithJobs)
        //Company routes
        this.router.get("/get-companies", Company.default.GetAllCompaniesWithJobs)
        this.router.route("/company/:id")
            .get(Company.default.GetCompany)
            .put(Company.default.UpdateCompany)
            .delete(Company.default.DeleteCompant)
        this.router.post("/add-company", Company.default.AddNewCompany)
        // Job Routes
        this.router.route("/job/:id")
            .get(Jobs.default.GetAllCompanies)
            .put(Jobs.default.UpdateCompany)
            .delete(Jobs.default.DeleteCompant)
        this.router.post("/add-job", Jobs.default.AddNewCompany)
        this.router.get("/all/job-types", Basic.default.GetJobTypes)
        this.router.get("/get-jobs/:category_id?", Basic.default.GetJobFromCategoryIdAndQueryFilters)
        this.router.get("/get-company-jobs/:company_id", Basic.default.GetJobsFromCompanyId)
        this.router.post("/bookmark/job", Basic.default.AddOrRemoveJobFromBookmarked)
        

        
        // this.router.use(Middlewares.isAuthenticated)
        this.router.get("/test", Test.default.CheckRoute)
    }

}