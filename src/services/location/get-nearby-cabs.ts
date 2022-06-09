import { Request, Response } from 'express';
import { CabLocation } from '../../models/cab-locations';
import { getDistance } from '../../utils/get-distance';

export = async (req: Request, res: Response) => {
    try{
        const cabs = await CabLocation.find()
    let nearbyCabs = [];
    for (let index = 0; index < cabs.length; index++) {
        const cab = cabs[index];
        const distance = getDistance({latitude:req.body.latitude, longitude:req.body.longitude}, {latitude:cab.latitude, longitude:cab.longitude});
        if(parseFloat(distance) <= 4){
            nearbyCabs.push({longitude:cab.longitude, latitude:cab.latitude, driver_id:cab.driver_id});
        }
    }

    if(nearbyCabs.length > 0){
        return res.status(200).json({available_cabs:nearbyCabs});
    }else{
        return res.status(200).json({message:'No cabs available'});
    }
    }catch(error){
        return res.status(500).json({"status": "failure","reason":error});
    }
}