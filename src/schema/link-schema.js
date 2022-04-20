const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
exports.linkSchema = new Schema({
    id: String,
    author: String,
    title: String,
    description: String,
    url: String,
    icon: String,
    privacy: String,
});





