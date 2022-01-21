const router = require("express").Router();
const {
  authUser,
  registerUser,
  updateUserProfile,
} = require("../../controllers/userController");
const { protect } = require("");

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
