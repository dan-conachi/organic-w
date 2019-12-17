import {EntityRepository, Repository} from "typeorm";
import { Address } from "../entity/address";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {   
    getById(id: number) {
        return this.manager.getId(id);
    }
}
