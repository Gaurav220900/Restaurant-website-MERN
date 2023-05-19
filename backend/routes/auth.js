const express = require("express");
const router = express.Router();
const User = require("../src/models/user");
const passport = require("passport");

router.get("/register", (req, res) => {

});

router.post("/auth/register", async (req, res) => {
 
    const { username, password, email, userType } = req.body;
    const user = new User({ username, email, userType });
    await User.register(user, password);
});

router.get("/login", (req, res) => {
 
});

router.post(
  "/auth/login",
  passport.authenticate("local", {
    failureMessage: true,
  }),
);

router.get("/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
});

module.exports = router;