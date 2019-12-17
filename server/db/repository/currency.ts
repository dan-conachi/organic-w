import {EntityRepository, Repository} from "typeorm";
import { Currency } from "../entity/currency";

@EntityRepository(Currency)
export class CurrencyRepository extends Repository<Currency> {}