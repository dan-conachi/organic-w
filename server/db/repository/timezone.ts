import {EntityRepository, Repository} from "typeorm";
import { TimeZone } from "../entity/timezone";

@EntityRepository(TimeZone)
export class TimeZoneRepository extends Repository<TimeZone> {}