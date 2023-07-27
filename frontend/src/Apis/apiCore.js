import { instance } from "./api.instance";

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