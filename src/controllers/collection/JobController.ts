import { Request, Response } from "express";

class JobController {

    async GetAllCompanies(req: Request, res: Response) { }
    async UpdateCompany(req: Request, res: Response) { }
    async AddNewCompany(req: Request, res: Response) { }
    async DeleteCompant(req: Request, res: Response) { }

}
export default new JobController()