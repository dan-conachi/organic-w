import { getConnection } from "typeorm";
import { CtrlBase } from "./base";
import { Request, Response } from 'express-serve-static-core';

import { CountryRepository } from "../db/repository/country" 
import { Country } from "../db/entity/country";

export class CountryCtrl extends CtrlBase {
    countryRepo: CountryRepository;

    constructor(request: Request, response: Response) {
        super(request, response)
        this.countryRepo = getConnection().getRepository(Country);
    }

    async getAll() {
        return await this.countryRepo.find();
    }
}