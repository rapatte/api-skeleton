import { Router } from 'express';
import userController from './controller';

Router()
    .route('/users')
    .get(userController.getAll)
    .post(userController.register);

userRouter.route(`${entrypoint}/auth`).post(userController.login);

export default userRouter;
