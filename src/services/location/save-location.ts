import { Request, Response } from 'express';
import { CabLocation, cabLocation } from './../../models/cab-locations';

export = async (req: Request, res: Response) => {
    try {
        await CabLocation.create(req.body as cabLocation);
        return res.status(200).json({status:'success'});
    } catch (error) {
        return res.status(500).json({"status": "failure","reason":error});
    }
}