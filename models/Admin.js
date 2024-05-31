import mongoose from 'mongoose'

const { Schema } = mongoose;

const AdminSchema = new Schema({
        
        email:{
            type: String,
            unique: true,
            required: [true,"Email alanı boş geçilemez"],
            
        },
        password:{
            type: String,
            required: [true,"Şifre alanı boş geçilemez"],
            
        }
    },
    {
        timestamps: true
    }
);

const Admin = mongoose.model('Admin', AdminSchema)
export default Admin