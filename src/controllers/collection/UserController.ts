import { Request, Response } from "express";
import { presql } from "../../connection/conn.js";
import JSONResponse from "../../services/JSONResponse.js";

class UserController {

    async GetAllCompanies(req: Request, res: Response) { }
    async UpdateCompany(req: Request, res: Response) { }
    async AddNewCompany(req: Request, res: Response) { }
    async DeleteCompant(req: Request, res: Response) { }
    async AddOrRemoveJobFromBookmarked(req: Request, res: Response) {
        let msg = ""
        let value = 0;
        try {
            const isJobExist = await presql.findOne({ table: "my_listings", where: { job_id: req.body.jobId }, select: { bookmarked: 1 } })

            if (isJobExist.length === 0) {
                await presql.buildQuery({ role: "0x00044", query: `INSERT INTO my_listings (user_id, job_id,bookmarked) VALUES (${req.body.userId}, ${req.body.jobId}, ${req.body.action})` })
                JSONResponse.Response(req, res, "Added to Bookmarks", { message: "OK" }, 200)
            } else {
                if (req.body.action === "true") {
                    msg = "Added to Bookmarks"
                    value = 1
                } else {
                    msg = "Removed From Bookmarks"
                    value = 0
                }
                await presql.updateOne({
                    table: "my_listings", data: {
                        bookmarked: value
                    }, where: { AND: { job_id: req.body.jobId, user_id: req.body.userId } }
                })
                JSONResponse.Response(req, res, msg, { message: "OK" }, 200)
            }

        } catch (error: any) {
            JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
    async ApplyJob(req: Request, res: Response) {
        const info = req.body

        try {
            const isJobExist = await presql.findOne({ table: "my_listings", where: { AND: { user_id: req.body.user_id, job_id: req.body.jobId } }, select: { applied: 1 } })
            if (isJobExist.length === 0) {
                await presql.buildQuery({
                    query: `INSERT INTO my_listings (user_id, job_id,is_applied) VALUES (${req.body.user_id}, ${req.body.jobIid}, 1)`,
                    role: "0x00044"
                })
                await presql.buildQuery({
                    query: `INSERT INTO applied_jobs (user_id, job_id,posted_by,company_id,status,message,skills) VALUES ("${req.body.user_id}", "${req.body.jobId}", "${req.body.pid}"," ${req.body.cid}", "${JSON.stringify(["Applied"])}", "${req.body.msg ?? req.body.msg}", "${JSON.stringify(info['tags[]'] || [])}")`,
                    role: "0x00044"
                })

            } else {
                await presql.updateOne({
                    table: "my_listings",
                    data: {
                        is_applied: 1
                    },
                    where: {
                        AND: { user_id: req.body.user_id, job_id: req.body.jobId }
                    }
                })
                await presql.buildQuery({
                    query: `INSERT INTO applied_jobs (user_id, job_id,posted_by,company_id,status,message,skills) VALUES ("${req.body.user_id}", "${req.body.jobId}", "${req.body.pid}"," ${req.body.cid}", "${JSON.stringify(["Applied"])}", "${req.body.msg ?? req.body.msg}", "${JSON.stringify(info['tags[]'] || [])}")`,
                    role: "0x00044"
                })
            }

            JSONResponse.Response(req, res, "You Applied for this Job Successfully", { message: "👍" }, 200)

        } catch (error: any) {
            JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }


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
    async UpdateMemberProfile(req: Request, res: Response) {
        console.log(req.body)
        res.end()
    }
    async UpdateMemberEducation(req: Request, res: Response) {
        console.log(req.body)
        res.end()
    }
    async UpdateMemberExperiences(req: Request, res: Response) {
        console.log(req.body)
        res.end()
    }
    async UpdateMemberProjects(req: Request, res: Response) {
        console.log(req.body)
        res.end()
    }
}
export default new UserController()