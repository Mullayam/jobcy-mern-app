import { Request, Response } from "express";
 
import JSONResponse from "../../services/JSONResponse.js";
import { UploadedFile } from "express-fileupload";
import path from "path";
import helpers from "../../helpers/index.js";

const ProfilePicUploadPath = path.join(process.cwd(), "public", "uploads", "profileImg");
const ResumeUploadPath = path.join(process.cwd(), "public", "uploads", "resumes");
class UserController {

  
    async AddOrRemoveJobFromBookmarked(req: Request, res: Response) {
        // let msg = ""
        // let value = 0;
        // try {
        //     const isJobExist = await presql.findOne({ table: "my_listings", where: { job_id: req.body.jobId }, select: { bookmarked: 1 } })

        //     if (isJobExist.length === 0) {
        //         await presql.buildQuery({ role: "0x00044", query: `INSERT INTO my_listings (user_id, job_id,bookmarked) VALUES (${req.body.userId}, ${req.body.jobId}, ${req.body.action})` })
        //         JSONResponse.Response(req, res, "Added to Bookmarks", { message: "OK" }, 200)
        //     } else {
        //         if (req.body.action === "true") {
        //             msg = "Added to Bookmarks"
        //             value = 1
        //         } else {
        //             msg = "Removed From Bookmarks"
        //             value = 0
        //         }
        //         await presql.updateOne({
        //             table: "my_listings", data: {
        //                 bookmarked: value
        //             }, where: { AND: { job_id: req.body.jobId, user_id: req.body.userId } }
        //         })
        //         JSONResponse.Response(req, res, msg, { message: "OK" }, 200)
        //     }

        // } catch (error: any) {
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        // }
    }
    async ApplyJob(req: Request, res: Response) {
        const info = req.body
        const Info = {
            message: (req.body.msg ?? req.body.msg) || "",
            skills: info['tags[]'] || [],
            status: ["Applied"]
        }
        // const status = JSON.stringify(Info)
        // try {
        //     const isJobExist = await presql.buildQuery({
        //         query: `SELECT is_applied FROM my_listings WHERE user_id=${req.body.user_id} AND job_id=${req.body.job_id}`,
        //         role: "0x00044"
        //     })
        //     console.log(isJobExist)
        //     if (isJobExist.length === 0) {


        //         await presql.buildQuery({
        //             query: `INSERT INTO my_listings (user_id,job_id,is_applied) VALUES ('${req.body.user_id}', '${req.body.job_id}', 1)`,
        //             role: "0x00044"
        //         })
        //         await presql.buildQuery({
        //             query: `INSERT INTO applied_jobs (user_id, job_id,posted_by,company_id,status) VALUES ('${req.body.user_id}', '${req.body.job_id}','${req.body.pid}', '${req.body.cid}','${status}')`,
        //             role: "0x00044"
        //         })
        //     } else {


        //         await presql.buildQuery({
        //             query: `UPDATE my_listings SET is_applied='1' WHERE user_id ='${req.body.user_id}' AND job_id='${req.body.job_id}'`,
        //             role: "0x00044"
        //         })
        //         await presql.buildQuery({
        //             query: `INSERT INTO applied_jobs (user_id, job_id,posted_by,company_id,status) VALUES ('${req.body.user_id}', '${req.body.job_id}','${req.body.pid}', '${req.body.cid}','${status}')`,
        //             role: "0x00044"
        //         })

        //     }

        //     JSONResponse.Response(req, res, "You Applied for this Job Successfully", { message: "👍" }, 200)

        // } catch (error: any) {
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        // }


    }
    async GetJobsPostedByMember(req: Request, res: Response) {

        // try {
        //     const getJob = await presql.buildQuery({ query: `SELECT jobs.id as jobID,job_title,job_location,industry_type,job_type,offered_salary,companies.id as cid,companies.name,companies.img,COUNT(applied_jobs.user_id) as total_applicants FROM jobs LEFT JOIN applied_jobs ON jobs.id = applied_jobs.job_id INNER JOIN companies ON jobs.company_id = companies.id  WHERE jobs.posted_by = ${req.query.cfn_id} GROUP BY jobs.id`, role: "0x00042" })
        //     JSONResponse.Response(req, res, "MyJobs", { MyJobs: getJob }, 200)
        // } catch (error: any) {
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        // }
    }
    async GetMemberBookmarkedJobs(req: Request, res: Response) {

        // try {
        //     const getJob = await presql.buildQuery({ query: `SELECT jobs.id as jobID,job_title,job_location,industry_type,job_type,offered_salary,companies.id as cid,companies.id as cid,companies.name,companies.img,my_listings.is_applied FROM my_listings INNER JOIN jobs ON jobs.id = my_listings.job_id LEFT JOIN companies ON jobs.company_id = companies.id  WHERE user_id = ${req.query.cfn_id} AND bookmarked=1`, role: "0x00042" })
        //     JSONResponse.Response(req, res, "BookmarkedJobs", { BookmarkedJobs: getJob }, 200)
        // } catch (error: any) {
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        // }
    }
    async UpdateMemberProfile(req: Request, res: Response) {

        // const Links = JSON.stringify({
        //     facebook: req.body.facebook,
        //     linkedin: req.body.linkedin,
        //     github: req.body.github,
        //     whatsapp: req.body.whatsapp
        // })
        // try {
        //     await presql.buildQuery({
        //         query: `UPDATE more_info SET links='${Links}' WHERE user_id = ${req.body.userId}`,
        //         role: "0x00044"
        //     })
        // } catch (error: any) {
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)

        // }
        // res.end()
    }
    async UpdateMemberEducation(req: Request, res: Response) {
        // try {
        //     const { user_id } = req.body
        //     delete req.body.user_id
        //     const Obj_Str = JSON.stringify(req.body)
        //     await presql.buildQuery({ query: `UPDATE more_info SET education = JSON_INSERT(education,'$.${req.body.education}','${Obj_Str}') WHERE user_id = ${user_id}`, role: "0x00044" })

        //     JSONResponse.Response(req, res, "New Education Added", {}, 200)

        // } catch (error: any) {
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)

        // }
    }
    async UpdateMemberExperiences(req: Request, res: Response) {
        // try {
        //     const { user_id } = req.body
        //     delete req.body.user_id
        //     const Obj_Str = JSON.stringify(req.body)

        //     await presql.buildQuery({ query: `UPDATE more_info SET experiences = JSON_INSERT(experiences,'$.${req.body.currentPosition}','${Obj_Str}') WHERE user_id = ${user_id}`, role: "0x00044" })


        //     JSONResponse.Response(req, res, "New Experience Added", {}, 200)

        // } catch (error: any) {
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)

        // }
    }

    async UpdateMemberProjects(req: Request, res: Response) {
        // try {
        //     const { user_id } = req.body
        //     delete req.body.user_id
        //     const Obj_Str = JSON.stringify(req.body)
        //     await presql.buildQuery({ query: `UPDATE more_info SET projects = JSON_INSERT(projects,'$.${req.body.projectTitle}','${Obj_Str}') WHERE user_id = ${user_id}`, role: "0x00044" })

        //     JSONResponse.Response(req, res, "New Project Added", {}, 200)
        // } catch (error: any) {
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        // }
    }
    async UpdateMemberProfilePicture(req: Request, res: Response) {
        // const ProfileImg = req.files?.image as UploadedFile
        // const renameFile = helpers.purifyString(ProfileImg.name)
        // try {
        //     ProfileImg.mv(`${path.join(ProfilePicUploadPath, renameFile)}`, async () => {
        //         await presql.updateOne({
        //             table: "member", data: {
        //                 image: renameFile
        //             },
        //             where: { user_id: req.body.user_id }
        //         })
        //         JSONResponse.Response(req, res, "Profile Image Uploaded Successfully", {}, 200)
        //     })
        // } catch (error: any) {
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)
        // }
    }

    async UpdateMemberResume(req: Request, res: Response) {
        // const resume = req.files?.resume as UploadedFile
        // const renameFile = helpers.purifyString(resume.name)

        // try {
        //     resume.mv(`${path.join(ResumeUploadPath, renameFile)}`, async (err: any) => {
        //         if (err) {
        //             throw new Error(err.message)
        //         }
        //         const CV_Obj = {
        //             cvfile: {
        //                 name: renameFile,
        //                 size: resume.size,
        //                 format: renameFile.split(".")[0],
        //                 md5: resume.md5
        //             },
        //             coverletter: ""
        //         }
        //         const CV_Obj_Str = JSON.stringify(CV_Obj)
        //         await presql.updateOne({
        //             table: "more_info", data: {
        //                 cv: CV_Obj_Str
        //             },
        //             where: { user_id: req.body.user_id }
        //         })
        //         JSONResponse.Response(req, res, "Resume Uploaded Successfully", {}, 200)
        //     })
        // } catch (error: any) {
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)

        // }
    }

    async FetchUserProfile(req: Request, res: Response) {
        // try {
        //     const SelectColumns = [
        //         "member.user_id",
        //         "member.username",
        //         "member.fullname",
        //         "member.image",
        //         "member.email",
        //         "member.phone",
        //         "member.location",
        //         "member.account_type",
        //         "member.info",
        //         "member.about_me",
        //         "member.created_at",
        //         "more_info.education",
        //         "more_info.experiences",
        //         "more_info.projects",
        //         "more_info.links",
        //         "more_info.languages",
        //         "more_info.cv",
        //         "more_info.skills",
        //         "more_info.current_ctc",
        //         "more_info.expected_ctc",
        //         "more_info.hourly_rate",

        //     ]
        //     const Details = await presql.buildQuery({ query: `SELECT ${SelectColumns.join(",")} FROM member INNER JOIN more_info ON member.user_id = more_info.user_id WHERE member.user_id ='${req.params.user_id}'`, role: "0x00044" })
        //     Details[0].education = helpers.ObjectKeysAndValues(Details[0].education)
        //     Details[0].projects = helpers.ObjectKeysAndValues(Details[0].projects)
        //     Details[0].experiences = helpers.ObjectKeysAndValues(Details[0].experiences)
        //     Details[0].cv = JSON.parse(Details[0].cv)
        //     Details[0].links = JSON.parse(Details[0].links)
        //     Details[0].languages = JSON.parse(Details[0].languages)
        //     Details[0].skills = JSON.parse(Details[0].skills)


        //     JSONResponse.Response(req, res, "User Profile", { Profile: Details[0] }, 200)

        // } catch (error: any) {
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)

        // }
    }
    async GetJobApplicantDetails(req: Request, res: Response) {
        // try {
        //     const SelectColumns = [
        //         "member.user_id",
        //         "member.fullname",
        //         "member.image",
        //         "member.email",
        //         "member.phone",
        //         "member.location",
        //         "member.account_type",
        //         "member.info",
        //         "member.about_me",
        //         "member.created_at",
        //         "more_info.education",
        //         "more_info.experiences",
        //         "more_info.projects",
        //         "more_info.links",
        //         "more_info.languages",
        //         "more_info.cv",
        //         "more_info.skills",
        //         "more_info.current_ctc",
        //         "more_info.expected_ctc",
        //         "more_info.hourly_rate",
        //         "AVG(member_ratings.ratings) as ratings",

        //     ]
        //     const Details = await presql.buildQuery({ query: `SELECT ${SelectColumns.join(",")} FROM member INNER JOIN more_info ON member.user_id = more_info.user_id LEFT JOIN member_ratings ON member.user_id = member_ratings.user_id WHERE member.user_id ='${req.params.user_id}'`, role: "0x00044" })
        //     Details[0].education = helpers.ObjectKeysAndValues(Details[0].education)
        //     Details[0].projects = helpers.ObjectKeysAndValues(Details[0].projects)
        //     Details[0].experiences = helpers.ObjectKeysAndValues(Details[0].experiences)
        //     Details[0].cv = JSON.parse(Details[0].cv).cvfile.name
         
        //     Details[0].links = JSON.parse(Details[0].links)
        //     Details[0].languages = JSON.parse(Details[0].languages)
        //     Details[0].skills = JSON.parse(Details[0].skills)
        //     Details[0].expected_ctc = helpers.FormatSalary(Details[0].current_ctc)
        //     Details[0].expected_ctc = helpers.FormatSalary(Details[0].expected_ctc)
        //     Details[0].ratings = (Details[0].ratings/1).toFixed(1)

        //     JSONResponse.Response(req, res, "User Profile", { Profile: Details[0] }, 200)

        // } catch (error: any) {
        //     console.log(error)
        //     JSONResponse.Error(req, res, "Something Went Wrong", { error: error.message }, 200)

        // }
    }
}
export default new UserController()