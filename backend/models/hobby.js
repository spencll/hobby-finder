const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    hobby: { type: String, required: true },
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;
