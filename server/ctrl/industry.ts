import { getConnection } from "typeorm";
import { IndustryRepository } from "../db/repository/industry" 
import { CtrlBase } from "./base";
import { Industry } from "../db/entity/industry";
import { Request, Response } from 'express-serve-static-core';

export class IndustryCtrl extends CtrlBase {
    industryRepo: IndustryRepository;

    constructor(request: Request, response: Response) {
        super(request, response)
        this.industryRepo = getConnection().getRepository(Industry);
    }

    async getAll() {
        return await this.industryRepo.find();
    }
}