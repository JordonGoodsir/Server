const User = require("../models/user");
const GiftList = require("../models/giftList");

// route has :userId and :childName

const getChildGiftListById = (req) => {
  // const userId = req.params.userId;
  // let user = await User.findById(userId);

  // let children = user.children;
  // let child = children.filter((child) => {
  //   return child.name === req.params.childname;
  // });
  // return child;
  return GiftList.find({ childName: req.params.childName });
};

const addChildGiftList = async (req) => {
  const userId = req.params.userId;
  let user = await User.findById(userId);

  console.log(user);
  // user.save((err) => {
  //   let giftList = new GiftList({
  //     gifts: req.body.gifts,
  //     childName: req.params.childName,
  //     receiver: req.body.receiver,
  //     uid: req.body.uid,
  //   });
  //   giftList.save();
  // });

  return user;
};

const updateChildGiftList = (req) => {};

const deleteChildGiftList = (req) => {};

module.exports = {
  getChildGiftListById,
  addChildGiftList,
  updateChildGiftList,
  deleteChildGiftList,
};
