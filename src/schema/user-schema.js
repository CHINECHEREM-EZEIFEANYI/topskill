const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
const Name = require('./className')
exports.userSchema = new Schema({
    id : String,
    Name: String,
    username: {
        type: String, min: 5, max: 35, required: true
    },
    email: {
        type: String, unique: true, required: true, lowercase: true
    },
    phoneNumber:Number,
    profilePhoto: {
        type: Schema.Types.ObjectId,
        ref: 'Image', 
        required : false
    },
    bio: [{ body: String, date: Date }],
    role: String,
    coverPhoto: {
        type: Schema.Types.ObjectId,
        ref: 'Image',
        required: false
    },
    subscription: String,
    disabled: Boolean
});