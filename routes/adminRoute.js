import express from 'express';
import * as adminController from '../controllers/adminController.js';

const router = express.Router();

router.route('/login').post(adminController.loginAdmin);
router.route('/delete/:id').post(adminController.deleteProduct)


export default router;