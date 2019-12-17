import { Request, Response } from 'express-serve-static-core';
import {getConnection, Repository} from "typeorm";

export class CtrlBase {
    //repo: Repository<T>
    req: Request;
    res: Response;
    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
        //this.repo = getConnection().getRepository<T>();
    }

    getBodyData() : Map<string, any> {
        return this.req.body;
    }
}