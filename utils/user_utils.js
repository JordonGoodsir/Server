const User = require("../models/user");

const getUserById = (req) => {
  return User.findById(req.params.userId);
};

const addChild = async (req) => {
  const userId = req.params.userId;
  let user = await User.findById(userId).populate("GiftList");
  let child = {
    name: req.body.name,
    age: req.body.age,
  };

  user.children.push(child);

  return User.findByIdAndUpdate(user._id, user, {
    new: true,
  });
};

module.exports = {
  getUserById,
  addChild,
};
