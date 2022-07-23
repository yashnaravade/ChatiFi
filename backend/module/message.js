const mongoose = require('mongoose');

// derived from a Schema

const messageSchema = new mongoose.Schema({
    user: String,
    messageType: String,
    messageBody: String,
    createdAt: {type: Date, default: Date.now}
 });
 
//  got a schema with one property

const messageModel = mongoose.model('messages', messageSchema) // stucture

module.exports = messageModel;