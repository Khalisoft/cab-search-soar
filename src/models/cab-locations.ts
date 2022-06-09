import { Schema, model, Model } from 'mongoose';

export interface cabLocation {
    driver_id: string,
    latitude: number,
    longitude: number,
    
}

const cabLocationSchema = new Schema<cabLocation>({
    driver_id: {type:String},
    latitude: {type:Number},
    longitude: {type:Number}
},{timestamps:true, toJSON: {
    transform: (doc, ret) => { 
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
}}})

export const CabLocation : Model<cabLocation> = model('CabLocation', cabLocationSchema);