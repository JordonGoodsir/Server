const passport = require("passport");
const User = require("../models/user");

const register = (req, res) => {
  User.register(
    new User({
      username: req.body.username,
      email: req.body.email,
    }),
    req.body.password,
    (error) => {
      if (error) {
        res.status(500);
        res.json({
          error: error,
        });
      } else {
        login(req, res);
      }
    }
  );
};

const login = (req, res) => {
  passport.authenticate("local")(req, res, () => {
    console.log("authenticated", req.user.username);
    console.log("session object:", req.session);
    console.log("req.user:", req.user);
    res.status(200);
    res.json(req.user);
  });
};

const logout = (req, res) => {
  req.logout();
  console.log("logged out user");
  res.sendStatus(200);
};

module.exports = {
  register,
  login,
  logout,
};
