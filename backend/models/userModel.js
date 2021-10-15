import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type: String, _required: true,
get required() {
            return this._required;
        },
set required(value) {
            this._required = value;
        },
},
    email:{type: String, required: true, unique: true},
    userName:{type: String, required: true, unique: true},
    pasword:{type: String, required: true},
    isAdmin:{type: Boolean, required: true, default: false }
});
const userModel = mongoose.model('user', userSchema);

export default userModel