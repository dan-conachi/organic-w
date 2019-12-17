import { getConnection } from "typeorm"; 
import { Request, Response } from 'express-serve-static-core';

import { CtrlBase } from "./base";
import { CompanyType } from "../db/entity/company_type";
import { CompanyTypeRepository } from "../db/repository/company_type"

export class CompanyTypeCtrl extends CtrlBase {
    companyTypeRepo: CompanyTypeRepository;

    constructor(request: Request, response: Response) {
        super(request, response)
        this.companyTypeRepo = getConnection().getRepository(CompanyType);
    }

    async getAll() {
        return await this.companyTypeRepo.find();
    }
}