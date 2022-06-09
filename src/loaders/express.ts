import express, {Express, Request, Response} from 'express'
import { prefix } from './../configs/index';
import {routes} from './../api/index'
import bodyParser from 'body-parser';

const app : Express = express();


app.get("/", (req:Request, res:Response) => {
	res.send("<h1>Cab API Test Soar Digital Test!</h1>");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(prefix, routes )

export {app}