import { EntityRepository, Repository } from "typeorm";
import { Vendor } from "../entity/vendor";

@EntityRepository(Vendor)
export class VendorRepository extends Repository<Vendor> { }