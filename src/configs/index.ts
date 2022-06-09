const {MONGO_URI} =process.env
export const prefix = "/api";
export const MONGO_STRING = MONGO_URI ?? "mongodb://localhost:27017/cab-db";
export const otpLength = 6;