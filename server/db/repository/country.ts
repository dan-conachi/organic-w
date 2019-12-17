import {EntityRepository, Repository} from "typeorm";
import { Country } from "../entity/country";

@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {}