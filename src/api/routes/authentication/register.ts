import { Router } from 'express';
import register from '../../../services/authentication/register';
const router =  Router()

router.post('/register', register)

export default router;