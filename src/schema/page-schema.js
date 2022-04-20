const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
 exports.pageSchema = new Schema({
    id: String,
    author: String,
    title: String,
    description: String,
    url: String,
    privacy: String,  
    links: []
});
