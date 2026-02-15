const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  upgradeSubscription,
  getProfile
} = require("../controllers/userController");

const router = express.Router();

router.get("/profile", protect, getProfile);
router.patch("/upgrade", protect, upgradeSubscription);

module.exports = router;
