const { getUserById, addChild } = require("../utils/user_utils");

const getUser = (req, res) => {
  getUserById(req).exec((error, user) => {
    if (error) {
      res.status(404);
      return res.send("User not found");
    }
    res.send(user);
  });
};

const makeChild = (req, res) => {
  addChild(req)
    .then((user) => {
      console.log(user);
      res.status(201);
      res.send(user);
    })
    .catch((err) => res.json({ error: err }));
};

module.exports = {
  getUser,
  makeChild,
};
