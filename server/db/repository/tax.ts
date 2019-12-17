import {EntityRepository, Repository} from "typeorm";
import { Tax } from "../entity/tax";

@EntityRepository(Tax)
export class TaxRepository extends Repository<Tax> {}