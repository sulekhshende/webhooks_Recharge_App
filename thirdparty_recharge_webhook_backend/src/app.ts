import express from 'express';
import * as dotenv from 'dotenv';
import 'dotenv/config';
import cors from "cors";
import { RechargeRouter } from './routes/rechargeRoute';

class App{
    public app: express.Application;
    public rechargeRouter: RechargeRouter = new RechargeRouter();

    constructor(){
        this.app = express();
        this.config();
        this.rechargeRouter.routes(this.app); 
    }

    private config():void{
        this.app.use(express.json());
        this.app.use(cors({ origin:true, credentials:true }));
    }
}

export default new App().app;