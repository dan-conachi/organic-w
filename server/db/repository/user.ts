import {EntityRepository, Repository} from "typeorm";
import {AppUser} from "../entity/user";

@EntityRepository(AppUser)
export class UserRepository extends Repository<AppUser> {
    findByMail(email: string) {
        return this.findOne({ email });
    }
}