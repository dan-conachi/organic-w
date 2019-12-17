import { getManager } from "typeorm";
import { Request, Response } from 'express-serve-static-core';
import * as jwt from "jsonwebtoken";

import { UserRepository } from "../db/repository/user" 
import { CtrlBase } from "./base";
import { AppUser } from "../db/entity/user";
import config from "../../config";
import { environment } from '../../webapp/src/environments/environment';

const bcrypt = require("bcrypt");

export class UserCtrl extends CtrlBase {
    userRepo: UserRepository;
    saltRounds: number = 10;

    constructor(request: Request, response: Response) {
        super(request, response)
        // get a post repository to perform operations with post
        this.userRepo = getManager().getCustomRepository(UserRepository);
    }

    async login(email: string, password: string) {    
        let user = await this.userRepo.findByMail(email);
        if(user != null && await bcrypt.compare(password, user.password)) {
            //sign token on login
            const token = 
                jwt.sign({userId: user.id, username: user.email}, config.jwtSecrete, {expiresIn: 5000})
            this.res.cookie('SESSIONID', token, {httpOnly: true, secure: true});
            this.res.redirect(301, 'app');
        } else {
            this.res.render('login', {});
        }
    }

    async init() {  
        if(environment.production) {
            let jwtPayload;  
            const token = <string>this.req.cookies['SESSIONID'];
            jwtPayload = jwt.verify(token, config.jwtSecrete);

            //console.log('jwtPayload', jwtPayload);
    
            let { username } = jwtPayload;
            let user = await this.userRepo.findByMail(username);

            this.res.json(user);
        }

        if(!environment.production) {
            let user = await this.userRepo.findByMail('test@gmail.com');

            this.res.json(user);
        }
    }

    async createUser(email: string, password: string) {
        let user = new AppUser();
        user.creation_date = new Date();
        user.last_modified_date = new Date()
        user.email = 'xugnad@gmail.com';
        user.password = 'admin';

        let hash = await bcrypt.hash(user.password, this.saltRounds);
        user.password = hash;

        await this.userRepo.save(user);
        this.res.redirect(301, 'login');
    }
}