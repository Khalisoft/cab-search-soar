import { Router } from 'express';
import getNearbyCabs from '../../../services/location/get-nearby-cabs';
const router =  Router()

router.post('/get-nearby-cabs', getNearbyCabs)

export default router;