import { Request, Response } from "express";

import JSONResponse from "../../services/JSONResponse.js";
import Helpers from "../../helpers/index.js";
import { JobTypes } from "../../factory/entities/jobs/jobTypes.js";
import { AppDataSource } from "../../DataSource.js";
import { Categories } from "../../factory/entities/cateogory/cateogories.js";
import { Jobs } from "../../factory/entities/jobs/jobs.js";
import { Companies } from "../../factory/entities/company/companies.js";

const CategoryService = AppDataSource.getRepository(Categories)
const JobTypesRepo = AppDataSource.getRepository(JobTypes)
const JobRepo = AppDataSource.getRepository(Jobs)
const CompanyRepo = AppDataSource.getRepository(Companies)
class BasicController {

   // Get all category from id with total jobs posted in that cateogry
   async GetAllCategoriesWithJobs(req: Request, res: Response) {
      try {          
         const CategoryList = await CategoryService.createQueryBuilder('c').leftJoin(Jobs, 'j','j.categoryId = c.id').addSelect('COUNT(j.id)', 'total_jobs').groupBy('c.id').getRawMany()

         JSONResponse.Response(req, res, "Categories", { Categories: CategoryList }, 200)
      } catch (error: any) {
         JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 403)
      }
   }
   // Get all job types like full time, parttime, frreelance

   async GetJobTypes(req: Request, res: Response) {
      try {
         const JobTypeArray = await JobTypesRepo.find()
         JSONResponse.Response(req, res, "Job Types", { JobTypeArray }, 200)
      } catch (error: any) {
         JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 403)
      }
   }
   // Get all category from id  and filter on joblsit  limit 10

   async GetJobFromCategoryIdAndQueryFilters(req: Request, res: Response) {
      let FilterString: string[] = [];
      let LIMIT: number = 10;
      let offset: number = 0;
      let offsetStr = " LIMIT 10 OFFSET 0"
      let strictMode: any = false
      let sql = "SELECT DISTINCT jobs.id,job_title,logo,min_exp,offered_salary,job_type,job_location,keywords,company_id as cid,companies.name as company_name,category.name  as category_name FROM jobs INNER JOIN category ON jobs.category_id = category.id INNER JOIN companies ON jobs.company_id = companies.id";
      try {
         const id = req.params.category_id
         const filters = req.query.filters

         if (typeof id !== "undefined") {
            sql = `SELECT DISTINCT jobs.id,job_title,logo,min_exp,offered_salary,job_type,job_location,keywords,company_id as cid,companies.name as company_name,category.name  as category_name FROM jobs INNER JOIN category ON jobs.category_id = category.id INNER JOIN companies ON jobs.company_id = companies.id WHERE category_id=${id}`
         }

         if (filters) {
            const QueryObject: FilterQuery = Helpers.QueryToObject(filters as string)
            if (typeof (QueryObject.strictMode) !== "undefined") {
               strictMode = QueryObject.strictMode
            }
            if (typeof (QueryObject.category) !== "undefined") {
               FilterString.push(`category_id=${QueryObject.category.split("-").pop()}`)
            }
            if (typeof (QueryObject.JobLocation) !== "undefined") {
               FilterString.push(`job_location='${QueryObject.JobLocation.split("(").shift()?.trim()}'`)
            }
            if (typeof (QueryObject.WorkExperience) !== "undefined") {
               //   const[ value1,value2]=  QueryObject.WorkExperience.split("-")               
               // FilterString.push(`min_exp IN (${value1},${value2})`)
            }
            if (typeof (QueryObject.EmploymentType) !== "undefined") {
               // FilterString.push(`job_type LIKE '%${QueryObject.searchTerm}%'`)
            }
            if (typeof (QueryObject.searchTerm) !== "undefined") {
               // FilterString.push(`job_type LIKE '%${QueryObject.searchTerm}%'`)
            }
            if (typeof (QueryObject.tags) !== "undefined") {
               // FilterString.push(`JSON_CONTAINS(tags, '${QueryObject.tags}',())`)
            }
            if (typeof (QueryObject.keywords) !== "undefined") {
               // FilterString.push(`JSON_CONTAINS(keywords, '${QueryObject.keywords}',())`)
            }
            if (typeof (QueryObject.DatePosted) !== "undefined") {
               FilterString.push(` posted_on BETWEEN ('${Helpers.ConvertDateWordsToDate(QueryObject.DatePosted as string)}') AND ('${Helpers.SimpleDateStr()}')`)
            }
            if (typeof (QueryObject.page) !== "undefined") {
               offset = (LIMIT * QueryObject.page) - LIMIT;
               offsetStr = ` LIMIT ${LIMIT} OFFSET ${offset}`
            }
            const JoinBy = strictMode === "true" ? " AND " : " OR "
            if (typeof id !== "undefined") {
               if (FilterString.length > 1) {
                  sql = sql + FilterString.join(JoinBy)
               } else {
                  sql = sql + JoinBy + FilterString[0]
               }
            } else {
               sql = sql + " WHERE " + FilterString.join(JoinBy)
            }


         }
         sql = sql + offsetStr
         console.log(sql)
         const Jobs = AppDataSource.query(sql)
         const countJobs = await AppDataSource.query("SELECT COUNT(jobs.id) as total_jobs FROM jobs")

         JSONResponse.Response(req, res, "Jobs", { Jobs, AvailableJobs: countJobs[0].total_jobs }, 200)
      } catch (error: any) {

         JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
      }
   }
   /* Get all jobs posted by a specific companys  */
   async GetJobsFromCompanyId(req: Request, res: Response) {
      try {
         const CompanyJobs = await JobRepo.createQueryBuilder('j').innerJoinAndSelect(Companies, "c","j.companyId = c.id").where("j.companyId = :company_id", { company_id: req.params.company_id }).orderBy("j.postedOn", "DESC").getMany()       
          
         JSONResponse.Response(req, res, "Jobs", { CompanyJobs }, 200)
      } catch (error: any) {
         JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 401)
      }
   }

}
export default new BasicController()

type FilterQuery = {
   category?: string,
   JobLocation?: string,
   EmploymentType?: string,
   tags?: string[],
   keywords?: string[],
   DatePosted?: string
   WorkExperience?: string,
   range?: string
   searchTerm?: string
   strictMode?: boolean
   page?: number
}