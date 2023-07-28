import { Request, Response } from "express";
import { presql } from "../../connection/conn.js";
import JSONResponse from "../../services/JSONResponse.js";

class JobController {

    async GetSingleJobWithID(req: Request, res: Response) {
        const jobID = req.params.jobId

        try {
            const getJob = await presql.buildQuery({ query: `SELECT jobs.id as jobID,job_title,min_exp,job_location,industry_type,job_type,position,offered_salary,description,responsiblites,qualifications,skills,keywords,openings,posted_by as pid ,posted_on,companies.id as cid,companies.name,companies.img,companies.website,companies.established_on,companies.location,companies.links FROM jobs INNER JOIN companies ON jobs.company_id = companies.id WHERE jobs.id = ${jobID}`, role: "0x00042" })
            
            JSONResponse.Response(req, res, "Jobs", { Job: getJob[0] })
        } catch (error: any) {
            JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
    async AddNewJob(req: Request, res: Response) { }
    async UpdateExistingJobWithJobId(req: Request, res: Response) { }
    async DeleteExistingJobWithJobId(req: Request, res: Response) { }

}
export default new JobController()