import Car from '../../Message/Car/Car';
import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage('./scratch');

export default class CarGateway {
    constructor() {
        this.nextCreateId = 0;

        this.getAll();
    }

    createOne(car) {        
        localStorage.setItem(this.nextCreateId, JSON.stringify(car));

        this.nextCreateId += 1;

        return this.getOne(this.nextCreateId - 1);
    }

    getOne(id) {
        let result = localStorage.getItem(id);

        result = JSON.parse(result);

        if (result === undefined || result === null) {
            return undefined;
        }

        return new Car(
            result.id,
            result.make,
            result.model,
            result.colour,
            result.year
        );
    }

    getAll() {
        let id = 0;
        let list = [];
        let item = null;
        while (this.getOne(id) !== undefined) {
            item = this.getOne(id)

            list.push(
                item
            );
            
            id += 1;
        }

        this.nextCreateId = id;

        return list
    }
}