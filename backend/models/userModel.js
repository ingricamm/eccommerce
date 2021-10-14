import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    userName:{type: String, required: true, unique: true},
    pasword:{type: String, required: true},
    isAdmin:{type: Boolean, required: true, default: false }
});
const userModel = mongoose.model('user', userSchema);

export default userModel