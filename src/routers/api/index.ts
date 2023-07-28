import { Router } from 'express'
import { Middlewares } from '../../middlewares/index.js';
import { Basic, Company, Jobs, Test, User } from '../../controllers/index.js';
import fileUpload from "express-fileupload"

export class BaseRoutes {
    public router: Router;
    constructor(router: Router) {
        this.router = router;
        this.PrivateRoutes()
    }

    protected PrivateRoutes() {
   /* Handle ategory Routes */       

        this.router.get("/all/categories", Basic.default.GetAllCategoriesWithJobs)
/* Company Routes */       
       
        this.router.get("/get-companies", Company.default.GetAllCompaniesWithJobs)
        this.router.route("/company/:id")
            .get(Company.default.GetCompany)
            .put(Company.default.UpdateCompany)
            .delete(Company.default.DeleteCompant)
        this.router.post("/add-company", Company.default.AddNewCompany)
/* Job Routes */       
        this.router.get("/single-job/:jobId?", Jobs.default.GetSingleJobWithID)
        this.router.post("/new-job", Jobs.default.AddNewJob)
        this.router.route("/handle-job/action")
        .put(Jobs.default.UpdateExistingJobWithJobId)
        .delete(Jobs.default.DeleteExistingJobWithJobId)
        

/* Controller.js */
        
        this.router.get("/all/job-types", Basic.default.GetJobTypes)
        this.router.get("/get-jobs/:category_id?", Basic.default.GetJobFromCategoryIdAndQueryFilters)
        this.router.get("/get-company-jobs/:company_id", Basic.default.GetJobsFromCompanyId)

/* UserController.js */
        this.router.post("/bookmark/job", User.default.AddOrRemoveJobFromBookmarked)
        this.router.post("/apply/job", User.default.ApplyJob)
        this.router.get("/my/posted/jobs", User.default.GetJobsPostedByMember)
        this.router.get("/get-bookmarked/jobs", User.default.GetMemberBookmarkedJobs)
        //update user Profile

        this.router.post("/update/member-profile",fileUpload(), User.default.UpdateMemberProfile)
        this.router.post("/update/member/experiences", User.default.UpdateMemberExperiences)
        this.router.post("/update/member/education", User.default.UpdateMemberEducation)
        this.router.post("/update/member/projects", User.default.UpdateMemberProjects)



/* Procted Routes  */
        // this.router.use(Middlewares.isAuthenticated)
        this.router.get("/test", Test.default.CheckRoute)
    }

}