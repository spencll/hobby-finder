const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
    name: String,
    description: String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    
    
});

const Hobby = mongoose.model('Hobby', hobbySchema);

module.exports = Hobby;
