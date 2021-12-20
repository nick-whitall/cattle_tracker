import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/cattle/cattle.validation';
import CattleService from './cattle.service';

class UserController implements Controller {
    public path = '/cattle';
    public router = Router();
    private CattleService = new CattleService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.create
        );
        this.router.get(
            `${this.path}`,
            this.get
        );
    }
    
    
    private create = (
        req: Request,
        res: Response,
        next: NextFunction
    ): Response | void => {

        res.status(200).send({ data: req.cattle });
    };

    private get = (
        req: Request,
        res: Response,
        next: NextFunction
    ): Response | void => {
        if (!req.user) {
            return next(new HttpException(404, 'No logged in user'));
        }

        res.status(200).send({ data: req.cattle });
    };
}

export default UserController;
