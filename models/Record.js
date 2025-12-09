// import { Schema, model, models } from 'mongoose';
// import { unique } from 'next/dist/build/utils';
// import { string } from 'yup';


// const recordSchema = new Schema(
// {
// name: String,
// email: {
//     type:String,
//     unique:true
// },
// phone: {
//     type:String,
//     unique:true
// },
// address: String,
// className: String,
// fatherName: String,
// amount: Number,
// paymentId: String,
// assignedDate: String,
// assignedTime: String,
// dob:String,
// gender:String
// },
// { timestamps: true }
// );


// export const Record = models.Record || model('Record', recordSchema);


import { Schema, model, models } from "mongoose";

const recordSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      lowercase: true,
    },

    phone: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },

    address: String,
    className: String,
    fatherName: String,

    amount: {
      type: Number,
      default: 0,
    },

    paymentId: String,
    assignedDate: String,
    assignedTime: String,

    dob: String,
    gender: String,
  },
  { timestamps: true }
);

export const Record = models.Record || model("Record", recordSchema);
