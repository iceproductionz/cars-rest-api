export default class Cars
{
    /**
     * 
     * @param {CarsGateway} carGateway 
     */
    constructor(carGateway)
    {
        this.carGateway = carGateway;
    }

    createOne(result)
    {
        return this.carGateway.createOne(result);
    }

    getOne(id)
    {
        return this.carGateway.getOne(id);
    }

    getAll() {
        return this.carGateway.getAll();
    }    
}