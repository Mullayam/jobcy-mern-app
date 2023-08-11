import { Request, Response } from "express";
import { presql } from "../../app/conn.js";
import JSONResponse from "../../services/JSONResponse.js";
import helpers from "../../helpers/index.js";

class JobController {

    async GetSingleJobWithID(req: Request, res: Response) {
        const jobID = req.params.jobId

        try {
            const getJob = await presql.buildQuery({ query: `SELECT jobs.id as jobID,job_title,min_exp,job_location,industry_type,job_type,position,offered_salary,description,responsiblites,qualifications,skills,keywords,openings,posted_by as pid ,posted_on,companies.id as cid,companies.name,companies.img,companies.website,companies.established_on,companies.location,companies.links,my_listings.is_applied FROM jobs INNER JOIN companies ON jobs.company_id = companies.id LEFT JOIN my_listings ON jobs.id = my_listings.job_id WHERE jobs.id = ${jobID}`, role: "0x00042" })

            JSONResponse.Response(req, res, "Jobs", { Job: getJob[0] })
        } catch (error: any) {
            JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
    async AddNewJob(req: Request, res: Response) { }
    async UpdateExistingJobWithJobId(req: Request, res: Response) { }
    async DeleteExistingJobWithJobId(req: Request, res: Response) { }
    async TotalApplicantsAppliedForJob(req: Request, res: Response) {
        const slug = req.params.slug
        const jobID = slug.split("-").pop()

        try {
            const GetApplicants = await presql.buildQuery({ query: `SELECT member.user_id,member.fullname,member.info,member.location,member.image,applied_jobs.applied_on,AVG(member_ratings.ratings) as ratings FROM member LEFT JOIN applied_jobs ON member.user_id = applied_jobs.user_id LEFT JOIN member_ratings ON member.user_id = member_ratings.user_id WHERE applied_jobs.job_id = ${jobID} GROUP BY applied_jobs.id DESC`, role: "0x00042" })

            JSONResponse.Response(req, res, "Jobs", { Applicants: GetApplicants })
        } catch (error: any) {
            JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
     

}
export default new JobController()
