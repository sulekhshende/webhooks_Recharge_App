import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import Recharge, { RechargeDocument } from './../models/Recharge';

export class RechargeService {
    async createRecharge(input: DocumentDefinition<Omit<RechargeDocument, 'createdAt'| 'updatedAt'>>) {
        try {
            const recharge = await Recharge.create(input);
            return recharge;
        } catch (e:any) {
            throw new Error(e);
        }
    };
    
    
    async findAllRecharges() {
        try {
            const findAllRecharges = await Recharge.find();
            return findAllRecharges;
        } catch (e:any) {
            throw new Error(e);
        }
    };
    
    async findRecharge(query: FilterQuery<RechargeDocument>, options: QueryOptions = {lean: true}) {
        try {
            const findRecharge = await Recharge.findOne(query, {}, options);
            return findRecharge;
        } catch (e:any) {
            throw new Error(e);
        }
    };
    
    async findAndUpdateRecharge(query: FilterQuery<RechargeDocument>, update: UpdateQuery<RechargeDocument>, options: QueryOptions) {
        try {
            const updatedRecharge = await Recharge.findOneAndUpdate(query, update, options);
            return updatedRecharge;
        } catch (e:any) {
            throw new Error(e);
        }
    };
}
