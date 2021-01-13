const User = require("../models/user");
const GiftList = require("../models/giftList");

// route has :userId and :childName

const getChildGiftListById = (req) => {
  return GiftList.find({ childUid: req.params.childUid });
};

const addChildGiftList = async (req) => {
  const childUid = req.params.childUid;

  let giftList = new GiftList({
    gifts: req.body.gifts || "",
    childUid: req.params.childUid,
    receiver: req.body.receiver,
    uid: req.body.uid,
  });
  giftList.save();

  return giftList;
};

const updateChildGiftList = (req) => {
  return GiftList.findOneAndUpdate(
    { childUid: req.params.childUid, uid: req.body.uid },
    req.body,
    {
      new: true,
    }
  );
};

const deleteChildGiftList = (req) => {
  return GiftList.deleteOne({
    childUid: req.params.childUid,
    uid: req.params.uid,
  });
};

module.exports = {
  getChildGiftListById,
  addChildGiftList,
  updateChildGiftList,
  deleteChildGiftList,
};
