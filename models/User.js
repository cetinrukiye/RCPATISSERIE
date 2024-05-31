import mongoose from 'mongoose'
import bcrypt from 'bcrypt';
import validator from 'validator';

const { Schema } = mongoose;

const UserSchema = new Schema({
        name:{
            type: String,
            required: [true,"İsim alanı boş geçilemez"],
            
        },
        surname:{
            type: String,
            required: [true,"Soyisim alanı boş geçilemez"],
            
        },
        email:{
            type: String,
            unique: true,
            required: [true,"Email alanı boş geçilemez"],
            
        },
        password:{
            type: String,
            required: [true,"Şifre alanı boş geçilemez"],
            
        },
        cart: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }]

    },
    {
        timestamps: true
    }
);
UserSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        next();
    });
});

const User = mongoose.model('User', UserSchema)
export default User