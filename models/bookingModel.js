const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  userName: String,
  status: { type: String, default: 'pending' }
});
module.exports = mongoose.model('Booking', bookingSchema);
