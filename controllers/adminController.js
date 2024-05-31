import Admin from '../models/Admin.js'
import Product from '../models/Product.js';

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });
        console.log(admin)


        let same = false

        if (admin) {
            if(admin.password == password ){
                same = true
                console.log(same)
                res.redirect('/admin');
            }
        } else {
            return res.status(401).json({
                succeded: false,
                error: 'There is no such user',
            });
        }

        
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
}
const deleteProduct = async (req, res) => {
    try {
        console.log("try")
        const productId = req.body.productId;
        
        const products = await Product.findByIdAndDelete(productId)
        console.log(products)
        await products.save();

        res.redirect('/users');
    } catch (error) {
        res.redirect('/users');
    }
};



export {loginAdmin, deleteProduct}