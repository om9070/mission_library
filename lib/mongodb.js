import mongoose from 'mongoose';


const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) throw new Error('Please add MONGO_URI to .env');


// export const connectDB = async () => {
// if (mongoose.connection.readyState >= 1) return;
// return mongoose.connect(MONGO_URI);
// };


// lib/connectDB.js

export const connectDB = async () => {
  try {
    // Prevent multiple connections in hot reload
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "test",
    });

    console.log("MongoDB connected");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};
