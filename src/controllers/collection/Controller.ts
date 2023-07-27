import { Request, Response } from "express";
import { presql } from "../../connection/conn.js";
import JSONResponse from "../../services/JSONResponse.js";
import Helpers from "../../helpers/index.js";

class BasicController {
   // Get all category from id with total jobs posted in that cateogry
   async GetAllCategoriesWithJobs(req: Request, res: Response) {
      try {
         const Categories = await presql.buildQuery({
            query: "SELECT category.id,category.name,category.icon,category.slug,COUNT(jobs.id) as total_jobs  FROM jobs RIGHT JOIN category ON jobs.category_id = category.id GROUP BY category.id",
            role: "0x00044"
         })
         JSONResponse.Response(req, res, "Categories", { Categories }, 200)
      } catch (error: any) {
         JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 401)
      }
   }
   // Get all job types like full time, parttime, frreelance

   async GetJobTypes(req: Request, res: Response) {
      try {
         const JobTypeArray = await presql.findMany({ table: "job_types" })
         JSONResponse.Response(req, res, "Job Types", { JobTypeArray }, 200)
      } catch (error: any) {
         JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 401)
      }
   }
   // Get all category from id  and filter on joblsit  limit 10

   async GetJobFromCategoryIdAndQueryFilters(req: Request, res: Response) {
      let FilterString: string[] = [];
      let LIMIT: number = 10;  
      let offset:number = 0;    
      let strictMode: Boolean = false
      let sql = "SELECT DISTINCT jobs.id,job_title,logo,min_exp,offered_salary,job_type,job_location,keywords,company_id as cid,companies.name as company_name,category.name  as category_name FROM jobs INNER JOIN category ON jobs.category_id = category.id INNER JOIN companies ON jobs.company_id = companies.id";
      try {
         const id = req.params.category_id
         const filters = req.query.filters
       
         if (typeof id !== "undefined") {
            sql = `SELECT DISTINCT jobs.id,job_title,logo,min_exp,offered_salary,job_type,job_location,keywords,company_id as cid,companies.name as company_name,category.name  as category_name FROM jobs INNER JOIN category ON jobs.category_id = category.id INNER JOIN companies ON jobs.company_id = companies.id WHERE category_id=${id} LIMIT 10`
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
            if (typeof (QueryObject.experience) !== "undefined") {
               FilterString.push(`min_exp IN (${QueryObject.experience})`)
            }
            if (typeof (QueryObject.searchTerm) !== "undefined") {
               FilterString.push(`job_title LIKE '%${QueryObject.searchTerm}%'`)
            }
            if (typeof (QueryObject.searchTerm) !== "undefined") {
               FilterString.push(`job_type LIKE '%${QueryObject.searchTerm}%'`)
            }
            if (typeof (QueryObject.tags) !== "undefined") {
               FilterString.push(`JSON_CONTAINS(tags, '${QueryObject.tags}',())`)
            }
            if (typeof (QueryObject.posted_on) !== "undefined") {
               FilterString.push(`BETWEEN (${new Date().toISOString().split("T")[0]}}) AND (${QueryObject.posted_on})`)
            }
            if (typeof (QueryObject.page) !== "undefined") {
               offset = (LIMIT * QueryObject.page) - LIMIT;
            }
            const JoinBy = strictMode ? " AND " : " OR "
            sql = sql + " WHERE " + FilterString.join(JoinBy)
         }
          
         const Jobs = await presql.buildQuery({
            query: sql,
            role: "0x00044"
         })
         const countJobs = await presql.buildQuery({
            query:`SELECT COUNT(jobs.id) as total_jobs FROM jobs`,
            role: "0x00044"
         })
        
         JSONResponse.Response(req, res, "Jobs", { Jobs,AvailableJobs:countJobs[0].total_jobs }, 200)
      } catch (error: any) {

         JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
      }
   }
   /* Get all jobs posted by a specific companys  */
   async GetJobsFromCompanyId(req: Request, res: Response) {
      try {

         let sql = `SELECT jobs.id,job_title,logo,min_exp,offered_salary,job_type,job_location,keywords,posted_on,company_id as cid,companies.name as company_name FROM jobs INNER JOIN companies ON jobs.company_id = companies.id WHERE company_id= ${req.params.company_id}  ORDER BY posted_on DESC`
         const CompanyJobs = await presql.buildQuery({
            query: sql,
            role: "0x00044"
         })
         JSONResponse.Response(req, res, "Jobs", { CompanyJobs }, 200)
      } catch (error: any) {
         JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 401)
      }
   }
   async  AddOrRemoveJobFromBookmarked(req: Request, res: Response) {
      console.log("first")
   }
   async ApplyJob(req: Request, res: Response) {
      
   }
}
export default new BasicController()

type FilterQuery = {
   category?: string,
   JobLocation?: string,
   employement?: string,
   tags?: string[],
   keywords?: string[],
   posted_on?: string
   experience?: string,
   range?: string
   searchTerm?: string
   strictMode?: boolean
   page?: number
}