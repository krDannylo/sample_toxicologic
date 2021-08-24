import { Router } from 'express';
import { SampleController } from '../controllers/sampleController';
import { UserController } from '../controllers/userController';

const router = Router();

const sampleController = new SampleController();
const userController = new UserController();

router.post('/sample', sampleController.register);

router.post('/user', userController.register);
router.post('/user/login', userController.login);

export default router;