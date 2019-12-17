import {EntityRepository, Repository} from "typeorm";
import { PermissionToRole } from "../entity/permission_to_role";

@EntityRepository(PermissionToRole)
export class PermissionToRoleRepository extends Repository<PermissionToRole> {}