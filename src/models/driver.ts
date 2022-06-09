import { Schema, model, Model } from 'mongoose';

export interface idriver {
    name: string,
    email: string,
    phone_number: string,
    license_number: number,
    car_number: number,
}

const driverSchema = new Schema<idriver>({
    name: {type:String},
    email: {type:String, unique:true},
    phone_number: {type:String, unique:true, maxlength:10},
    license_number: {type:Number, unique:true},
    car_number: {type:Number, unique:true},
}, { toJSON: {
    transform: (doc, ret) => { 
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
}}});

export const Driver : Model<idriver> = model('Driver', driverSchema);