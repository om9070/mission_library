import mongoose from 'mongoose';


const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) throw new Error('Please add MONGO_URI to .env');


export const connectDB = async () => {
if (mongoose.connection.readyState >= 1) return;
return mongoose.connect(MONGO_URI);
};