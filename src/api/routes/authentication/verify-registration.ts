import { Router } from 'express';
import verifyRegistration from '../../../services/authentication/verify-registration';
const router =  Router()

router.post('/verify-registration', verifyRegistration)

export default router;