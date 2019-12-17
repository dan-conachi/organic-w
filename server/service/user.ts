import { EntityManager } from "typeorm";
import { UserRepository } from "../db/repository/user"

export class UserSVC {
    manager: EntityManager;
    constructor(manager: EntityManager) {
        this.manager = manager
    }
}