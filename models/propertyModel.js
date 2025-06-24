const mongoose = require('mongoose');
const propertySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  propType: String,
  propAdType: String,
  isAvailable: Boolean,
  propAddress: String,
  ownerContact: String,
  propAmt: Number,
  propImages: [String],
  addInfo: String
});
module.exports = mongoose.model('Property', propertySchema);
