const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

const Gift = new Schema({
  gift: { type: String, required: true },
  receiver: String,
});

const ToyBoxSchema = new Schema({
  gifts: [Gift],
  user: User,
});

module.exports = mongoose.model("GiftList", ToyBoxSchema);
