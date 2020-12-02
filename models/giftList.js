const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GiftList = new Schema({
  gifts: [
    {
      gift: { type: String, required: true },
    },
  ],
  receiver: String,
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("GiftList", GiftList);
