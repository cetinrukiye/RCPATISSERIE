import Product from "../models/Product.js";
import User from "../models/User.js";


// Ürünü sepete ekleme işlemi
const addToCart = async (req, res) => {
    try {
        const { productId } = req.body;

        // Ürünü bulun
        const product = await Product.findById(productId);
        const userget = await User.findById({ _id: res.locals.user._id })


        // Sepete ürünü ekle
        userget.cart.push(product);

        // Kullanıcıyı güncelle
        await userget.save();

        res.redirect('/'); // Sepet sayfasına yönlendir
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
};

// Sepeti görüntüleme işlemi
// Sepeti görüntüleme işlemi
const viewCart = async (req, res) => {
    try {

        const user = await User.findById({ _id: res.locals.user._id }).populate({
            path: 'cart',
            select: 'name price type photo' // İhtiyaç duyduğunuz diğer özellikleri buraya ekleyebilirsiniz
        });
        let totalAmount = 0;
        user.cart.forEach(product => {
            totalAmount += product.price;
        });

        res.render('shoping-cart', { cartItems: user.cart, totalAmount, link:'product' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
}
const removeFromCart = async (req, res) => {
    try {
        const productId = req.body.productId;
        const product = await Product.findById(productId);
        console.log(product)

        const user = await User.findById({ _id: res.locals.user._id })
        user.cart.pull(productId);
        await user.save();

        res.redirect('/cart/get');
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
};



export {addToCart, viewCart, removeFromCart}