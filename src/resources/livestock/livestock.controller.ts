import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/livestock/livestock.validation';
import LivestockService from './livestock.service';

class LivestockController implements Controller {
    public path = '/livestock';
    public router = Router();
    private livestockService = new LivestockService();

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

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const livestock = req.body;

            const post = await this.livestockService.create(livestock);

            res.status(201).json({ post });
        } catch (error) {
            next(new HttpException(400, 'Cannot create post'));
        }
    };
    private get = (
        req: Request,
        res: Response,
        next: NextFunction
    ): Response | void => {
        console.log('test');
        if (!req.user) {
            return next(new HttpException(404, 'No logged in user'));
        }

        res.status(200).send({ data: {} });
    };
}

export default LivestockController;
