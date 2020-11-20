import Cars from './Service/Cars';
import express from 'express';
import CarGateway from './Gateway/Car/Car';

const port = 3000
const carsGateway = new CarGateway()
const carsService = new Cars(carsGateway);

const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    console.log(req);
    console.log(res);

    carsService.getOne()
});

app.post('/v1/cars', (req, res) => {
    const result = carsService.createOne(req.body);

    res.send(JSON.stringify(result));
});

app.get('/v1/cars', (req, res) => {
    const result = carsService.getAll();

    res.send(JSON.stringify(result));
});

app.get('/v1/cars/:carId', (req, res) => {
    const result = carsService.getOne(req.params.carId);

    res.send(JSON.stringify(result));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});