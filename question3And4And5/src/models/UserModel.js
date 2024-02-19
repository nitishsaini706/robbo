const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    age: Number,
    country: String,
    password: String
});

export const User = mongoose.model('User', userSchema);