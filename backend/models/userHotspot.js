const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserHotspotSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    time: Date,
    location: String,
    hobby: { type: Schema.Types.ObjectId, ref: 'Hobby' },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  });
  
  const UserHotspot = mongoose.model('Hotspot', UserHotspotSchema);

  module.exports = UserHotspot
  