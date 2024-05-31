import Product from "../models/Product.js";

const createProduct = async (req, res) => {
    try {
        console.log(req.body)
        const { name, price, type, photo } = req.body;
        //const photo = req.file.filename;
        console.log(photo)
        const product = new Product({
            name,
            price,
            type,
            photo
        });

        await product.save();

        res.status(201).json({ message: 'Ürün başarıyla eklendi.' });
    } catch (err) {
        console.log('Ürün ekleme hatası:', err);
        res.status(500).json({ message: 'Ürün eklenirken bir hata oluştu.' });
    }
}

const listProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.render('index', { products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
};







export {createProduct, listProducts}