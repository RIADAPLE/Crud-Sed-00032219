import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: String,
    roles: String
}, {timestamps: true});

const User = mongoose.model('User',UsersSchema);

export default User;