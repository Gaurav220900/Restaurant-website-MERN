const express = require("express");
const router = express.Router();
const User = require("../src/models/user");
const passport = require("passport");

router.get("/register", (req, res) => {

});

router.post("/auth/register", async (req, res) => {
 
    try{
    const { username, password, email, userType } = req.body;
    const user = new User({ username, email, userType });
    const data = await User.register(user, password);
    res.status(200).json({user:req.body})
    }
    catch(e){
        res.status(204).json({'msg':e.message});
    }
});

router.get("/login", (req, res) => {
    console.log(req.user)
	if (req.user) {
		return res.status(200).json({ user: req.user })
	} else {
		return res.status(201).json({ user: '' })
	}
});

router.post("/login",
passport.authenticate('local',{
    failureMessage: true,
}),
(req, res) => {
    try{
  console.log('req.sessionID: ', req.sessionID)
  res.status(200).json({ user: req.user });
    }
    catch(err){
        res.status(204).json({msg:err});
    }
}
);

router.get("/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({msg:'User logged out successfully'});
  });
});

module.exports = router;