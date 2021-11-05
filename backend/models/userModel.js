import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type: String, required: [true, 'campo requerido']},
    email:{type: String, required:[true, 'campo Requerido'],  unique:true },
    password:{type: String, required:[true, 'campo requerido']},
    isAdmin:{type: Boolean, required: [true, 'campo requerido'], default: false },
    
});
  
const userModel = mongoose.model('user', userSchema);


export default userModel