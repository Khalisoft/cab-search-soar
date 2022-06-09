import { Request, Response } from 'express';
import { otpLength } from '../../configs';
import { OTP } from '../../models/OTP';
import { generateOtp } from '../../utils/generate-otp';

export = async (req: Request, res: Response) => {
    const otp = generateOtp(otpLength);
    try {
        await OTP.create({...req.body, otp:otp});
        return res.status(200).json({email:req.body.email, otp:otp});
    } catch (error) {
        return res.status(500).json({"status": "failure","reason":error});
    }
}