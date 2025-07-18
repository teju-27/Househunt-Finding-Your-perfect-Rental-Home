const Property = require("../models/propertyModel");
const Booking = require("../models/bookingModel");

exports.createProperty = async (req, res) => {
  try {
    const property = await Property.create({ ...req.body, userId: req.user.id });
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: "Failed to create property" });
  }
};

exports.getOwnerProperties = async (req, res) => {
  try {
    const properties = await Property.find({ userId: req.user.id });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch properties" });
  }
};

exports.updatePropertyStatus = async (req, res) => {
  const { id } = req.params;
  const { isAvailable } = req.body;
  try {
    await Property.findByIdAndUpdate(id, { isAvailable });
    res.json({ message: "Status updated" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update property" });
  }
};

exports.getOwnerBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ ownerId: req.user.id }).populate('propertyId').populate('userId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};
