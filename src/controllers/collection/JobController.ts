import { Request, Response } from "express";

import JSONResponse from "../../services/JSONResponse.js";
import helpers from "../../helpers/index.js";
import { AppDataSource } from "../../DataSource.js";
import { Categories } from "../../factory/entities/cateogory/cateogories.js";
import { JobTypes } from "../../factory/entities/jobs/jobTypes.js";
import { Jobs } from "../index.js";
import { Companies } from "../../factory/entities/company/companies.js";
import { AppliedJobs } from "../../factory/entities/jobs/appliedJobs.js";
import { Member } from "../../factory/entities/user/member.js";

const CategoryService = AppDataSource.getRepository(Categories)
const JobTypesRepo = AppDataSource.getRepository(JobTypes)
const AppliedJobsRepo = AppDataSource.getRepository(AppliedJobs)
const CompanyRepo = AppDataSource.getRepository(Companies)
const MemberRepo = AppDataSource.getRepository(Member)
class JobController {

    async GetSingleJobWithID(req: Request, res: Response) {
        const jobID = req.params.jobId

        try {
            // query: `SELECT jobs.id as jobID,job_title,min_exp,job_location,industry_type,job_type,position,offered_salary,description,responsiblites,qualifications,skills,keywords,openings,posted_by as pid ,posted_on,companies.id as cid,companies.name,companies.img,companies.website,companies.established_on,companies.location,companies.links,my_listings.is_applied FROM jobs INNER JOIN companies ON jobs.company_id = companies.id LEFT JOIN my_listings ON jobs.id = my_listings.job_id WHERE jobs.id = ${jobID}`
            const GetApplicants = await AppliedJobsRepo.find({
                select:{id:true,postedByUser:{id:true,username:true},user:{id:true,username:true},job:{id:true,jobTitle:true,slug:true},},
                relations:{ postedByUser:true,company:true,user:true,job:true,}
            })

            JSONResponse.Response(req, res, "Jobs", { Job: GetApplicants })
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
            const GetApplicants = await AppliedJobsRepo.findAndCount({
                select:{id:true,postedByUser:{id:true,username:true},user:{id:true,username:true},job:{id:true,jobTitle:true,slug:true},company:{id:true,name:true,slug:true},},
                relations:{ postedByUser:true,company:true,user:true,job:true,},
                
            })
            JSONResponse.Response(req, res, "Jobs", { Applicants: GetApplicants })
        } catch (error: any) {
            JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        }
    }
     

}
export default new JobController()
