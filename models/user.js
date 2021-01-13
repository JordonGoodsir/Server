const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const Child = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  giftList: {
    ref: "GiftList",
    type: mongoose.Schema.Types.ObjectId,
  },
  childUid: {
    type: String,
    required: true,
  },
});

const User = new Schema({
  email: {
    type: String,
    required: "Please provide an email address.",
    unique: true,
    uniqueCaseInsensitive: true,
    validate: [validateEmail, "Please provide a valid email address."],
  },
  username: {
    type: String,
    required: "Please provide a username.",
    unique: true,
    uniqueCaseInsensitive: true,
  },
  children: [Child],
  giftList: {
    ref: "GiftList",
    type: mongoose.Schema.Types.ObjectId,
  },
});

User.plugin(passportLocalMongoose);
User.plugin(uniqueValidator);

module.exports = mongoose.model("User", User);
