const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const foodRoute = require("./routes/food");
const cors = require("cors");
const morgan = require('morgan');
const passport = require("passport");
const loaclStrategy = require("passport-local");
const session = require('express-session');
const User = require('./src/models/user');
const authRoutes = require('./routes/auth');

mongoose
  .connect("mongodb://localhost:27017/food-app")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

  const sessionConfig = {
    secret: "nice",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    },
  };
  
app.use(session(sessionConfig));
app.use(passport.authenticate("session"));

passport.use(new loaclStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use(morgan('tiny'))

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);


app.use(foodRoute);
app.use(authRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log("listening at port 4000");
});
