import express from 'express';
const router = express.Router();
import multer from 'multer'
import * as path from "path"
import * as productController from '../controllers/ProductController.js';


// Multer ayarları
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './public/');
//     },
//     filename: function(req, file, cb) {
//         const ext = path.extname(file.originalname);
//         const fileName = file.fieldname + '-' + Date.now() + ext;
//         cb(null, fileName);
//     }
// });
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        const filename = file.fieldname + '-' + Date.now() + path.extname(file.originalname); // path.extname() ile dosya uzantısını alın
        req.body.photo = filename
        cb(null, filename);
    }
});

const upload = multer({ storage: storage });

// Ürün oluşturma rotası
//router.post('/', upload.single('photo'), productController.createProduct);
router.route('/add').post(upload.single('photo'), productController.createProduct);


export default router
