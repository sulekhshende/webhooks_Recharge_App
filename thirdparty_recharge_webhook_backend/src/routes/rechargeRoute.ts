import { Application, Router } from 'express';
import { RechargeController } from '../controller/rechargeController';


export class RechargeRouter {
    public router: Router;
    public RechargeController: RechargeController; 

    constructor() {
        this.router = Router();
        this.routes;
        this.RechargeController = new RechargeController();
    }
    
    routes(app: Application) : void {
        app.route("/api/recharge").post(this.RechargeController.createRechargeHandler);
        app.route("/api/getRecharges").get(this.RechargeController.getAllRechargesHandler);
        app.route("/api/changeStatus/:rechargeId").put(this.RechargeController.changeStatusHandler);
    }
}



