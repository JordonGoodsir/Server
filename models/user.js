const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

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
  children: {},
});

User.plugin(passportLocalMongoose);
// Apply the uniqueValidator plugin to userSchema.
User.plugin(uniqueValidator);

module.exports = mongoose.model("User", User);
