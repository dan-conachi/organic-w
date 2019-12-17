import {EntityRepository, Repository} from "typeorm";
import { Industry } from "../entity/industry";

@EntityRepository(Industry)
export class IndustryRepository extends Repository<Industry> {}