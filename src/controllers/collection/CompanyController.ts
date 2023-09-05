import { Request, Response } from "express";

import JSONResponse from "../../services/JSONResponse.js";
import { AppDataSource } from "../../DataSource.js";
import { Companies } from "../../factory/entities/company/companies.js";
const CompanyRepo = AppDataSource.getRepository(Companies)

class CompanyController {

   async GetAllCompaniesWithJobs(req: Request, res: Response) {
      try {
         const Companies = await CompanyRepo.createQueryBuilder("c")
            .leftJoin("c.jobs", "jobs", "jobs.companyId = c.id")
            .select(["c.id  as cid", "c.name", "c.location", "c.img", "COUNT(jobs.id) as total_jobs",])
            .distinct()
            .groupBy("c.id").getRawMany()
         JSONResponse.Response(req, res, "CompanyList", { Companies }, 200)
      } catch (error: any) {
         JSONResponse.Response(req, res, "Something Went Wrong", { error: error.message }, 401)
      }
   }
   async UpdateCompany(req: Request, res: Response) { }
   async AddNewCompany(req: Request, res: Response) { }
   async DeleteCompant(req: Request, res: Response) { }
   async GetCompany(req: Request, res: Response) {     
      try {
         const Company = await CompanyRepo.findOneByOrFail({ id: Number(req.params.id) })
         JSONResponse.Response(req, res, "Company Info", { Company }, 200)
      } catch (error: any) {
         JSONResponse.Response(req, res, "Something Went Wrong", { error: error.message }, 401)
      }
   }


}
export default new CompanyController()