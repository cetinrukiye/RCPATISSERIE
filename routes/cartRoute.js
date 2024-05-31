import express from 'express'
const router = express.Router();
import * as cartController  from '../controllers/cartController.js'

// Sepetten ürün silme işlemi
router.route('/get').get(cartController.viewCart)
router.route('/add/:id').post(cartController.addToCart)
router.route('/delete/:id').post(cartController.removeFromCart)


export default  router;
