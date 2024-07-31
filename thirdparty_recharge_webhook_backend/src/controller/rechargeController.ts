import { Request, Response } from "express";
import logger from "../utils/logger";
import { CreateRechargeInput, updateRechargeInput } from "../validations/rechargeValidation";
import { RechargeService } from "../service/rechargeService";
import axios from "axios";
//import { ParsedQs } from "qs";

interface UpdateObj{
    //status?: string | ParsedQs | string[] | ParsedQs[] | undefined;
    status?:number;
}

export class RechargeController {

    public RechargeService: RechargeService;

    constructor(){
        this.RechargeService = new RechargeService();
    }

    //Callback Function Automatically Called when User Wants to Reharge and Hits CreateEntryHandler Api
    createRechargeHandler:any = async (req: Request<{}, {}, CreateRechargeInput["body"]>, res: Response) => {
        try {
            console.log("api hitted");
            let rechargeID = Math.floor(Math.random() * (100000000 - 1 + 1)) + 1;
            req.body.status = 0;
            const body = req.body;
            const recharge = await this.RechargeService.createRecharge({
                ...body,
                rechargeId:rechargeID
            });
            return res.send(recharge);
        } catch (e:any) {
            logger.error(e);
            return res.status(500).send(e.message);
        }
    }

    //Get All Recharge Requests of User
    getAllRechargesHandler:any = async (req:Request, res: Response) => {
        try {
            const entry = await this.RechargeService.findAllRecharges();
            return res.send(entry);
        } catch (e: any) {
            logger.error(e);
            return res.status(500).send(e.message);
        }
        
    };


    // //Api For Updating The Status of Recahrge to 1 that is Success
    // changeStatusHandler:any = async (req: Request<updateRechargeInput['params'], {}, CreateRechargeInput["body"]>, res: Response) => {
    //     try {
    //         const updateObj:UpdateObj={};
    //         updateObj.status = 1;
    //         const rechargeId = req.params.rechargeId;
    //         const rechargeTable = await this.RechargeService.findRecharge({rechargeId});
    //         const entryId = rechargeTable?.yourId;
    //         if (!rechargeTable) {
    //             console.log("rechargeId Not Found!!!");
    //             return res.sendStatus(404);
    //         }
    //         else{
    //             const recharge = await this.RechargeService.findAndUpdateRecharge({
    //                 rechargeId}, updateObj, {new: true} 
    //             ).then(async updated => {
    //                 const rechargeTable = await this.RechargeService.findRecharge({rechargeId})
    //                 .then(async found => {
    //                     await fetch("http://localhost:4500/api/callback/" + entryId, {
    //                     method: "PUT",
    //                     headers: {"Content-Type": "application/json"},
    //                     body: JSON.stringify({ "status":1 })
    //                     })
    //                         return res.status(201).json(updated);
    //                 })
    //             })
                
    //             return res.status(201).json(recharge);
    //         }
            
    //     } catch (e:any) {
    //         logger.error(e);
    //         return res.status(500).send(e.message);
    //     }
    // }
    //Api For Updating The Status of Recahrge to 1 that is Success
    changeStatusHandler:any = async (req: Request<updateRechargeInput['params'], {}, CreateRechargeInput["body"]>, res: Response) => {
        try {
            const updateObj:UpdateObj={};
            updateObj.status = 1;
            const rechargeId = req.params.rechargeId;
            const rechargeTable = await this.RechargeService.findRecharge({rechargeId});
            const entryId = rechargeTable?.yourId;
            
            const recharge = await this.RechargeService.findAndUpdateRecharge({
                rechargeId}, updateObj, {new: true} 
            );

            const userStatus = JSON.stringify({
                "status" : updateObj.status,
            });
            //CallBack to User Side Api 
            const callbackUpdateRechargeRequest = axios({
                baseURL: "http://localhost:4500/api/callback/" + entryId,
                headers: {"Content-Type": "application/json"},
                method: "PUT",
                data: userStatus
            });

            return res.status(201).json(callbackUpdateRechargeRequest);
            
        } catch (e:any) {
            logger.error(e);
            return res.status(500).send(e.message);
        }
    }
}
