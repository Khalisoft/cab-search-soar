import { Schema, model, Model } from 'mongoose';

export interface iotp {
    otp: string,
    email: string,
    name: string,
    phone_number: string,
    license_number: number,
    car_number: number, 
    is_active: boolean,
    status: string,
}

const otpSchema = new Schema<iotp>({
    otp: {type:String},
    email: {type:String},
    name: {type:String}, 
    phone_number: {type:String, maxlength:10},
    license_number: {type:Number},
    car_number: {type:Number},
    is_active: {type:Boolean, default:true},
    status: {type:String, default:'pending'},
},{ toJSON: {
    transform: (doc, ret) => { 
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
}}})

export const OTP : Model<iotp> = model('OTP', otpSchema);