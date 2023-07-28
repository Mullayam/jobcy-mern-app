import { Request, Response } from "express";
import { presql } from "../../connection/conn.js";
import JSONResponse from "../../services/JSONResponse.js";

class UserController {

    async GetAllCompanies(req: Request, res: Response) { }
    async UpdateCompany(req: Request, res: Response) { }
    async AddNewCompany(req: Request, res: Response) { }
    async DeleteCompant(req: Request, res: Response) { }
    async AddOrRemoveJobFromBookmarked(req: Request, res: Response) {
        
        try {
             await presql.updateMany({
                table: "my_listings", data: {
                    bookmarked: req.body.action
                }, where: { job_id: req.body.jobIid }
            })
            JSONResponse.Response(req, res, "Removed From Bookmarks", {message:"OK"}, 200)
        } catch (error: any) {
            JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
    async ApplyJob(req: Request, res: Response) {

    }
    async GetJobsPostedByMember(req: Request, res: Response) {

        try {
            const getJob = await presql.buildQuery({ query: `SELECT jobs.id as jobID,job_title,job_location,industry_type,job_type,offered_salary,companies.id as cid,companies.name,companies.img FROM jobs INNER JOIN companies ON jobs.company_id = companies.id WHERE posted_by = ${req.query.cfn_id} `, role: "0x00042" })
            JSONResponse.Response(req, res, "MyJobs", { MyJobs: getJob }, 200)
        } catch (error: any) {
            JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
    async GetMemberBookmarkedJobs(req: Request, res: Response) {

        try {
            const getJob = await presql.buildQuery({ query: `SELECT jobs.id as jobID,job_title,job_location,industry_type,job_type,offered_salary,companies.id as cid,companies.id as cid,companies.name,companies.img,my_listings.is_applied FROM my_listings INNER JOIN jobs ON jobs.id = my_listings.job_id LEFT JOIN companies ON jobs.company_id = companies.id  WHERE user_id = ${req.query.cfn_id} AND bookmarked=1`, role: "0x00042" })
            JSONResponse.Response(req, res, "BookmarkedJobs", { BookmarkedJobs: getJob }, 200)
        } catch (error: any) {
            JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }

}
export default new UserController()