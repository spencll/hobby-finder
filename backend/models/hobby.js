const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
    name: String,
    description: String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    
    
});

hobbySchema.statics.findByHobby = function(hobby) {
    return this.find({ name: new RegExp(hobby, 'i') }); // Case-insensitive search
  };

const Hobby = mongoose.model('Hobby', hobbySchema);

module.exports = Hobby;
