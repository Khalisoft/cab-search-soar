import { app } from "./loaders/express";
import dotenv from 'dotenv'
import connectDB from './loaders/mongoose';

dotenv.config({ path: "./.env" });
const port = process.env.PORT || 8080;

connectDB()

app.listen(port, () => {
	console.log(`Cab Search Server is running on port ${port}`);
});
