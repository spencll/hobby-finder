const mongoose = require('mongoose');
const Schema = mongoose.Schema

const HotspotSchema = new Schema({
    time: Date,
    location: String,
    state: String,
    hobby: { type: Schema.Types.ObjectId, ref: 'Hobby' },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  });
  
  const Hotspot = mongoose.model('Hotspot', HotspotSchema);

  module.exports = Hotspot
  