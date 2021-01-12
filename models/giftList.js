const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GiftList = new Schema({
  gifts: [
    {
      gift: String,
    },
  ],
  receiver: String,
  uid: String,
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
  childUid: String,
});

module.exports = mongoose.model("GiftList", GiftList);
