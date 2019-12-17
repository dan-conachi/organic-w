import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import { AppUser } from "../db/entity/user";
import { AccountToUser } from "../db/entity/account_to_user";
import { Role } from "../db/entity/role";

export const checkRole = (roles: Array<string>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
         //Get the user ID from previous midleware
        const id = res.locals.jwtPayload.userId;

        const userRepository = getRepository(AppUser);
        let user: AppUser;

        try {
            user = await userRepository.findOneOrFail(id);
        } catch (id) {
            res.status(401).send();
        }

        //TODO check here if that's the correct way!!!
        let accountToUser = await getRepository(AccountToUser).find({where: {user_id: user.id}, take: 1});
        let role = await getRepository(Role).findOne(accountToUser[0].role);

        if(roles.indexOf(role.name) > -1) next()
        else res.status(401).send();
    }
}