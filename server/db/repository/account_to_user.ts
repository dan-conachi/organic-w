import {EntityRepository, Repository} from "typeorm";
import { AccountToUser } from "../entity/account_to_user";

@EntityRepository(AccountToUser)
export class AccountToUserRepository extends Repository<AccountToUser> {}