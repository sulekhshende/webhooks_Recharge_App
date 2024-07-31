import mongoose from "mongoose";
//import { customAlphabet } from "nanoid";

//const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface RechargeDocument extends mongoose.Document {
  rechargeId?: number;
  mobileNo: string;
  amount: number;
  yourId: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}

const RechargeSchema = new mongoose.Schema(
  { 
    rechargeId: {
        type: Number,
        required: true,
        //unique: true,
        randomNumbers : () => Math.floor(Math.random() * (100000000 - 1 + 1)) + 1,
        //default: () => `product_${nanoid()}`,
      },
    mobileNo: { type: String, required: true },
    amount: { type: Number, required: true },
    yourId: { type: Number, required: true },
    status: { type: Number, required: true },
  },
  { timestamps: true }
);

const Recharge = mongoose.model<RechargeDocument>("Recharge", RechargeSchema);

export default Recharge;