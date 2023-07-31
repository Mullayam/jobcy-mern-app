import { instance } from "./api.instance";

/**
 * 
 * @param {cfn_id} user_id 
 * 
 
 */
export const Login = async (email, password) => {
  return await instance.post("/login", {
    email,
    password,
  });
};
export const Register = async (data) => {
  return await instance.post("/register", data);
};
export const ForgetPassword = async (data) => {
  return await instance.post("/forget-password", { email: data });
};
export const CurrrentUser = async (id) => {
  return await instance.get("/current-user/id");
};
/*
Company API Functions
*/
export const GetCompaniesWithJobs = async () => {
  return await instance.get("/v1/get-companies");
};
export const GetCompany = async (id) => {
  return await instance.get(`/v1/company/${id}`);
};
export const GetCompanyJobs = async (id) => {
  return await instance.get(`/v1/get-company-jobs/${id}`);
};
/*

User API Functions
*/
export const GetAllCategories = async () => {
  return await instance.get("/v1/all/categories");
};
export const GetAllJobTypes = async () => {
  return await instance.get("/v1/all/job-types");
};
export const GetJobFromCategoryIdAndQueryFilters = async (id, filters) => {
  const URL = id === undefined ? "/v1/get-jobs" : `/v1/get-jobs/${id}`;  
  return await instance.get(URL, {     
    params:  {filters} 
  });
};
export const AddOrRemoveBookmarkedJob = async (data)=>{ 
  return await instance.post("/v1/bookmark/job",data)}
export const GetAllUserNotifications = async (data)=>{ 
  return await instance.get("/v1/notifications",)
}
export  const GetJobDetailsFromJobId = async (jobId)=>{
  return await instance.get(`/v1/single-job/${jobId}`)
}
export  const GetJobsPostedByMember = async (cfn_id)=>{   
  return await instance.get("/v1/my/posted/jobs",{
    params:{cfn_id}
  })
}
export  const DeleteJobPostedByMember = async (jobId)=>{   
  return await instance.delete("/v1/handle-job/action",{
    params:{jobId}
  })
}
export  const UpdateJobPostedByMember = async (jobId)=>{   
  return await instance.put("/v1/handle-job/action",{
    params:{jobId}
  })
}
/* Get Bookmarked jobs for member  */

export const GetMemberBookmarkedJobs = async (cfn_id)=>{
  return await instance.get("/v1/get-bookmarked/jobs",{
    params:{cfn_id}
  })
}
/* Update UserProfile */
export const UpdateMemberProfile = async (data)=>{
  return await instance.post("/v1/update/member-profile",data)
}
export const UpdateMemberEducation = async (userId,data)=>{
  return await instance.post("/v1/update/member/education",{userId,data})
}
export const UpdateMemberExperiences= async (userId,data)=>{
  return await instance.post("/v1/update/member/experiences",{userId,data})
}
export const UpdateMemberProjects = async (data)=>{
  return await instance.post("/v1/update/member/projects",data)
}

export const UpdateMemberProfilePicture = async (data)=>{
  return await instance.post("/v1/update/profile-picture",data)
}

export const UpdateMemberResume = async (data)=>{
  return await instance.post("/v1/update/resume",data)
}

/* Apply For Job */
 export const ApplyForJob = async (data)=>{
  return await instance.post("/v1/apply/job",data)
   
 }