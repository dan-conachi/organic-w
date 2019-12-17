import { getConnection } from "typeorm";
import { CurrencyRepository } from "../db/repository/currency" 
import { CtrlBase } from "./base";
import { Currency } from "../db/entity/currency";
import { Request, Response } from 'express-serve-static-core';

export class CurrencyCtrl extends CtrlBase {
    currencyRepo: CurrencyRepository;

    constructor(request: Request, response: Response) {
        super(request, response)
        this.currencyRepo = getConnection().getRepository(Currency);
    }

    async getAll() {
        return await this.currencyRepo.find();
    }
}