import {Router} from 'express';
import * as orderController from './order.controller.js';
import {validation} from '../../middleware/validation.js'
import { auth } from '../../middleware/auth.js';
import { endPoint } from './order.endpoint.js';

//import * as validators from './order.validation.js'
const router = Router();

router.post('/',auth(endPoint.create), orderController.createOrder);
router.patch('/cancel/:orderId',auth(endPoint.cancel), orderController.cancelOrder);
router.get('/',auth(endPoint.get), orderController.getOrders);
router.patch('/changeStatus/:orderId',auth(endPoint.changeStatus),orderController.changeStatus);
export default router;