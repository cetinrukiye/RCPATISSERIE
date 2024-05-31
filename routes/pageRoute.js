import {Router} from 'express'
import * as pageController from "../controllers/pageController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";

const router = Router()

router.route('/').get(pageController.getIndexPage)
router.route('/about').get(pageController.getAboutPage)
router.route('/contact').get(pageController.getContactPage)
router.route('/product').get(pageController.getProductPage)
router.route('/register').get(pageController.getRegisterPage)
router.route('/login').get(pageController.getLoginPage)
router.route('/buyuk').get(pageController.getProductBuyukPage)
router.route('/kucuk').get(pageController.getProductKucukPage)
router.route('/ozel').get(pageController.getProductOzelPage)
router.route('/indirim').get(pageController.getProductIndirimPage)
router.route('/admin').get(pageController.getProductAdminPage)
router.route('/users').get(pageController.getProductTablePage)
router.route('/shopping').get(pageController.getShoppingPage)
router.route('/profile').get(pageController.getProfilePage)
router.route('/adminlogin').get(pageController.getAdminLoginPage)


export default router