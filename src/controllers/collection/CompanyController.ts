import { Request,Response } from "express";
import { presql } from "../../app/conn.js";
import JSONResponse from "../../services/JSONResponse.js";

class CompanyController {
     
    async GetAllCompaniesWithJobs(req:Request, res:Response){
     try {  
           
        const Companies = await presql.buildQuery({
           query: "SELECT DISTINCT companies.id,companies.name,companies.location,companies.img,COUNT(jobs.id) as total_jobs FROM companies LEFT JOIN jobs ON jobs.company_id = companies.id  GROUP BY companies.id",
           role: "0x00044"
           
        })
        JSONResponse.Response(req,res,"CompanyList",{Companies},200)
     } catch (error:any) {
        JSONResponse.Response(req,res,"Something Went Wrong",{error:error.message},401)        
     }
    }
    async UpdateCompany(req:Request, res:Response){}
    async AddNewCompany(req:Request, res:Response){}
    async DeleteCompant(req:Request, res:Response){}
    async GetCompany(req:Request, res:Response){
      const company_id = req.params.id
      try {       
         const Company = await presql.findById({table:"companies",id:company_id})
         JSONResponse.Response(req,res,"Company Info",{Company:Company[0]},200)
      } catch (error:any) {
         JSONResponse.Response(req,res,"Something Went Wrong",{error:error.message},401)        
      }
    }

     
}
 export default new CompanyController()