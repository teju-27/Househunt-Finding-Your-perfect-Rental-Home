const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

exports.approveOwner = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndUpdate(id, { type: "Owner" });
    res.json({ message: "Owner approved" });
  } catch (error) {
    res.status(500).json({ error: "Approval failed" });
  }
};
