import { Request, Response } from 'express';
import { Driver, idriver } from '../../models/driver';
import { OTP } from '../../models/OTP';

export = async (req: Request, res: Response) => {
    const ifEmailValid = await OTP.findOne({
        email:req.body.email, is_active:true, status:'pending'
    });

    if(!ifEmailValid) {
        return res.status(404).json({"status": "failure",
        "reason": "Record not found, register again!"});
    }

    if(ifEmailValid?.otp !== req.body.otp) {
        return res.status(403).json({"status": "failure","reason":"OTP is incorrect!"});
    }

    
    if(ifEmailValid?.otp === req.body.otp) {
        await OTP.findByIdAndUpdate(ifEmailValid._id, {is_active:false, status:'verified'});
        try {
            const driver = await Driver.create(req.body as idriver);
            return res.status(200).json(driver);
        } catch(err) {
            return res.status(500).json({"status": "failure","reason":err});
        }
    }
}