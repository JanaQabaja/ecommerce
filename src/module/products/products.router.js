import {Router} from 'express';
import * as productController from './products.controller.js';
import { auth } from '../../middleware/auth.js';
import { endPoint } from './products.endpoint.js';
import fileUpload, { fileValidation } from '../../services/multer.js';
import {validation} from '../../middleware/validation.js'
import * as validators from './product.validation.js'

const router = Router();

router.get('/', productController.getProducts);
router.post('/',auth(endPoint.create),fileUpload(fileValidation.image).fields([
{name:'mainImage',maxCount:1},{name:'subImages',maxCount:4},
]),validation(validators.createProduct),productController.createProduct);

router.get('/category/:categoryId', productController.getProductWithCategory)
router.get('/:productId', productController.getProduct)

export default router;