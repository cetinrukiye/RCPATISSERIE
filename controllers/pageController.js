import Product from "../models/Product.js";
import User from "../models/User.js";
import product from "../models/Product.js";


// const getIndexPage = (req, res) => {
//     res.render('index', {
//         link: 'index'
//     })
// }

const getIndexPage = async (req, res) => {
    try {
        const products = await Product.find();
        let user = null
        if(res.locals.user){
             user = await User.findById({ _id: res.locals.user._id })
        }
        console.log(user)
       // console.log(user)
        if (user!=null){
            res.render('index', {
                products,
                user,
                link:'home'
            });
        }else{
            res.render('index', {
                products,
                link:'home'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
};

const getAboutPage = (req, res) => {
    res.render('about', {
        link: 'about'
    })
}
const getLoginPage = (req, res) => {
    res.render('login', {
        link: 'login',
    });
};
const getRegisterPage = (req, res) => {
    res.render('register', {
        link: 'register'
    })
}
const getContactPage = (req, res) => {
    res.render('contact', {
        link: 'contact'
    })
}
const getProductPage = async (req, res) => {
    try {
        const products = await Product.find();
        let user = null
        if(res.locals.user){
            user = await User.findById({ _id: res.locals.user._id })
        }
        console.log(user)
        // console.log(user)
        if (user!=null){
            res.render('product', {
                products,
                user,
                link: 'product',
            });
        }else{
            res.render('product', {
                products,
                link: 'product',
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
};




const getProductBuyukPage = async (req, res) => {
    try {
        const products = await Product.find();
        let user = null
        if(res.locals.user){
            user = await User.findById({ _id: res.locals.user._id })
        }
        console.log(user)
        // console.log(user)
        if (user!=null){
            res.render('product-buyuk', {
                products,
                user,
                link: 'product',
            });
        }else{
            res.render('product-buyuk', {
                products,
                link: 'product',
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
}
const getProductAdminPage = (req, res) => {
    res.render('indexAdmin', {
        link: 'product'
    })
}
const getProductTablePage =  async (req, res) => {
    try {
        const products = await Product.find();
        let user = null
        if(res.locals.user){
             user = await User.findById({ _id: res.locals.user._id })
        }
        console.log(user)
       // console.log(user)
        if (user!=null){
            res.render('table-basic', {
                products,
                user,
                link:'home'
            });
        }else{
            res.render('table-basic', {
                products,
                link:'home'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
};
const getProductKucukPage = async (req, res) => {
    try {
        const products = await Product.find();
        let user = null
        if(res.locals.user){
            user = await User.findById({ _id: res.locals.user._id })
        }
        console.log(user)
        // console.log(user)
        if (user!=null){
            res.render('product-kucuk', {
                products,
                user,
                link: 'product',
            });
        }else{
            res.render('product-kucuk', {
                products,
                link: 'product',
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
}
const getProductIndirimPage = async (req, res) => {
    try {
        const products = await Product.find();
        let user = null
        if(res.locals.user){
            user = await User.findById({ _id: res.locals.user._id })
        }
        console.log(user)
        // console.log(user)
        if (user!=null){
            res.render('product-indirim', {
                products,
                user,
                link: 'product',
            });
        }else{
            res.render('product-indirim', {
                products,
                link: 'product',
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
}

const getProductOzelPage = async (req, res) => {
    try {
        const products = await Product.find();
        let user = null
        if(res.locals.user){
            user = await User.findById({ _id: res.locals.user._id })
        }
        console.log(user)
        // console.log(user)
        if (user!=null){
            res.render('product-ozel', {
                products,
                user,
                link: 'product',
            });
        }else{
            res.render('product-ozel', {
                products,
                link: 'product',
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
}


const getShoppingPage = (req, res) => {
    res.render('shoping-cart', {
        link: 'product'
    })
}

const getProfilePage = (req, res) => {
    res.render('pages-profile', {
        link: 'product'
    })
}

const getAdminLoginPage = (req, res) => {
    res.render('adminLogin', {
        link: 'product'
    })
}







export {getIndexPage, getAboutPage, getLoginPage, getRegisterPage, getContactPage, getProductPage,
    getProductBuyukPage, getProductAdminPage, getProductTablePage, getShoppingPage,
    getProductOzelPage, getProductIndirimPage, getProductKucukPage,getProfilePage,getAdminLoginPage



}