const User = require("../models/user");
const GiftList = require("../models/giftList");

// route has :userId and :childname

const getChildGiftListById = async (req) => {
  const userId = req.params.userId;
  let user = await User.findById(userId).populate("GiftList");

  let children = user.children;
  let child = children.filter((child) => {
    return child.name === req.params.childname;
  });
  return child;
};

const addChildGiftList = (req) => {};

const updateChildGiftList = (req) => {};

const deleteChildGiftList = (req) => {};

module.exports = {
  getChildGiftListById,
  addChildGiftList,
  updateChildGiftList,
  deleteChildGiftList,
};
