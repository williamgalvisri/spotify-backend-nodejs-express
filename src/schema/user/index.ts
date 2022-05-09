import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: { type: String},
    password: { type: String, }, 
    email: { type: String },
    token: {type: String }
});

export default mongoose.models.Users || mongoose.model('users', UserSchema)
