const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GiftList = new Schema({
  gifts: [
    {
      gift: { type: String, required: true },
    },
  ],
  receiver: String,
  uid: String,
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
  childName: String,
});

module.exports = mongoose.model("GiftList", GiftList);
