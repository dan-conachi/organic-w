import { EntityRepository, Repository } from "typeorm";
import { CompanyType } from "../entity/company_type";

@EntityRepository(CompanyType)
export class CompanyTypeRepository extends Repository<CompanyType> { }