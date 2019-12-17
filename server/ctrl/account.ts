import { getConnection, getManager } from "typeorm";
import { CtrlBase } from "./base";
import { Request, Response } from 'express-serve-static-core';
import { classToPlain, plainToClass } from "class-transformer"

import { AccountRepository } from "../db/repository/account"

import { Account } from "../db/entity/account";
import { Address } from "../db/entity/address";

export class AccountCtrl extends CtrlBase {
    accountRepo: AccountRepository;

    constructor(request: Request, response: Response) {
        super(request, response)
        this.accountRepo = getConnection().getRepository(Account);
    }

    async get() {
        const { userId } = this.res.locals.jwtPayload;
        if (!userId) return;
        const account = await this.accountRepo.findOne({ user_id: userId });
        return { ...account, ...account.address }
    }

    async save() {
        const { userId } = this.res.locals.jwtPayload;
        const data = this.getBodyData()
        let account = Account.toClass(data)
        account.user_id = userId
        account.creation_date = account.creation_date || new Date()
        account.last_modified_date = account.last_modified_date || new Date();

        return await getManager().transaction(async transactionalEntityManager => {
            let address = Address.toClass(data);
            account.address = address
            return await transactionalEntityManager.save(account)
        }).catch((e) => { console.log('error', e) })
    }

    async saveMisc() {
        const { userId } = this.res.locals.jwtPayload;
        const data = this.getBodyData()
        let account = Account.toClass(data)
        account.user_id = userId
        account.last_modified_date = new Date();

        return await this.accountRepo.save(account)
    }

    async getAll() {
        return await this.accountRepo.find();
    }
}