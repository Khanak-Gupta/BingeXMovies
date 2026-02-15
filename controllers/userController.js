const User = require("../models/User");

// Upgrade Subscription
exports.upgradeSubscription = async (req, res) => {
  try {
    const { plan } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { subscription: plan },
      { new: true }
    );

    res.json({
      message: "Subscription updated",
      subscription: user.subscription
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Profile
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};





