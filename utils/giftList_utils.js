const User = require("../models/user");
const GiftList = require("../models/giftList");

const getGiftListById = (req) => {
  return GiftList.find({ user: req.params.userId });
};

const addGiftList = async (req) => {
  const userId = req.params.userId;
  let user = await User.findById(userId);

  user.save((err) => {
    let giftList = new GiftList({
      gifts: req.body.gifts,
      user: user._id,
      receiver: req.body.receiver,
    });
    giftList.save();
  });

  return user;
};

const updateGiftList = (req) => {
  return GiftList.findOneAndUpdate(
    { user: req.params.userId, receiver: req.body.receiver },
    req.body,
    {
      new: true,
    }
  );
};

const deleteGiftList = (req) => {
  return GiftList.deleteOne({
    user: req.params.userId,
    receiver: req.body.receiver,
  });
};

module.exports = {
  getGiftListById,
  addGiftList,
  updateGiftList,
  deleteGiftList,
};
