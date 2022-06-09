import { Router } from 'express';
import register from './routes/authentication/register';
import saveLocation from './routes/location/save-location';
import getNearbyCabs from './routes/location/get-nearby-cabs';
import verifyRegistration from './routes/authentication/verify-registration';
export const routes = Router();

routes.use('/',[
    register, verifyRegistration, saveLocation, getNearbyCabs
])
