import { getConnection } from "typeorm";
import { CtrlBase } from "./base";
import { Request, Response } from 'express-serve-static-core';

import { Tax } from "../db/entity/tax";
import { Account } from "../db/entity/account";
import { TaxRepository } from "../db/repository/tax" 

export class TaxCtrl extends CtrlBase {
    taxRepo: TaxRepository;

    constructor(request: Request, response: Response) {
        super(request, response)
        this.taxRepo = getConnection().getRepository(Tax);
    }

    async getAll() {
        return await this.taxRepo.find();
    }

    async getAllByUser() {
        const { userId } = this.res.locals.jwtPayload;
        const account = await getConnection().getRepository(Account).findOne({ user_id: userId });
        return await this.taxRepo.find({account_id: account.id});
    }

    async saveByUser() {
        const { userId } = this.res.locals.jwtPayload;
        const data = this.getBodyData();
        console.log('data', data)
        //what when multiple accounts?
        const account = await getConnection().getRepository(Account).findOne({ user_id: userId });
        const tax = Tax.toClass(data)
        tax.account_id = account.id
        return await this.taxRepo.save(tax);
    }

    async deleteByID(id: number) {
        console.log(id);
        return await this.taxRepo.delete(id);
    }
}