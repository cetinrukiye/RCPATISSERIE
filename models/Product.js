import mongoose from 'mongoose'

const { Schema } = mongoose;

const ProductSchema = new Schema({
        name:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        type:{
            type: String,
            enum: ["buyuk", "kucuk", "ozel", "indirim"],
            default: "buyuk"
        },
        photo:{
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
);


const Product = mongoose.model('Product', ProductSchema)
export default Product