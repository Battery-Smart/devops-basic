import { Router } from 'express';
import testController from '../controller/testController';

const router = Router();

router.route('/getHealthInfo').get(testController.testOSHealth);

export default router;
