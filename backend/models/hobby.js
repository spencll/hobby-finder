const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
    hobby: { type: String, required: true },
    
    
});

const User = mongoose.model('Hobby', hobbySchema);

module.exports = User;
