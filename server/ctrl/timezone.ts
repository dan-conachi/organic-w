import { getConnection } from "typeorm";
import { Request, Response } from 'express-serve-static-core';

import { CtrlBase } from "./base";
import { TimeZone } from "../db/entity/timezone";
import { TimeZoneRepository } from "../db/repository/timezone" 

export class TimeZoneCtrl extends CtrlBase {
    timezoneRepo: TimeZoneRepository;

    constructor(request: Request, response: Response) {
        super(request, response)
        this.timezoneRepo = getConnection().getRepository(TimeZone);
    }

    async getAll() {
        return await this.timezoneRepo.find();
    }
}