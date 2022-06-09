import { Router } from 'express';
import saveLocation from '../../../services/location/save-location';
const router =  Router()

router.post('/save-location', saveLocation)

export default router;