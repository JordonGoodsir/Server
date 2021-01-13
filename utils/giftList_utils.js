const User = require("../models/user");
const GiftList = require("../models/giftList");

const getGiftListById = (req) => {
  return GiftList.find({ user: req.params.userId });
};

const addGiftList = async (req) => {
  const userId = req.params.userId;
  let user = await User.findById(userId).populate("GiftList");

  console.log(req.body);
  let giftList = new GiftList({
    gifts: req.body.gifts || "",
    user: user.id,
    receiver: req.body.receiver,
    uid: req.body.uid,
  });
  giftList.save();

  return giftList;
};

const updateGiftList = (req) => {
  return GiftList.findOneAndUpdate(
    { user: req.params.userId, uid: req.body.uid },
    req.body,
    {
      new: true,
    }
  );
};

const deleteGiftList = (req) => {
  return GiftList.deleteOne({
    user: req.params.userId,
    uid: req.params.uid,
  });
};

module.exports = {
  getGiftListById,
  addGiftList,
  updateGiftList,
  deleteGiftList,
};
