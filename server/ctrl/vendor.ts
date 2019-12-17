import { getConnection } from "typeorm";
import { CtrlBase } from "./base";
import { Request, Response } from 'express-serve-static-core';

import { Vendor } from "../db/entity/vendor";
import { Account } from "../db/entity/account";
import { VendorRepository } from "../db/repository/vendor" 

export class VendorCtrl extends CtrlBase {
    vendorRepo: VendorRepository;

    constructor(request: Request, response: Response) {
        super(request, response)
        this.vendorRepo = getConnection().getRepository(Vendor);
    }

    async getAll() {
        return await this.vendorRepo.find();
    }

    async getAllByUser() {
        const { userId } = this.res.locals.jwtPayload;
        const account = await getConnection().getRepository(Account).findOne({ user_id: userId });
        return await this.vendorRepo.find({account_id: account.id});
    }

    async saveByUser() {
        const { userId } = this.res.locals.jwtPayload;
        const data = this.getBodyData();
        console.log('data', data)
        //what when multiple accounts?
        const account = await getConnection().getRepository(Account).findOne({ user_id: userId });
        const vendor = Vendor.toClass(data)
        vendor.account_id = account.id
        return await this.vendorRepo.save(vendor);
    }

    async deleteByID(id: number) {
        return await this.vendorRepo.delete(id);
    }
}