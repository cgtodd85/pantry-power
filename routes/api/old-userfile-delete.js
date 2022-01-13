const router = require("express").Router;
const User = require("../../models/User");

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const userData = await User.create(user);
    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (error) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.body.email });
    if (!userData) {
      res.status(400).json({ message: "Incorrect email or password" });
      return;
    }
    const validPassword = await userData.comparePassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "you are now logged in omg!" });
    });
  } catch (error) {}
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
