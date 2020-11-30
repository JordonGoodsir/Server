const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
});

User.plugin(passportLocalMongoose);
// Apply the uniqueValidator plugin to userSchema.
User.plugin(uniqueValidator);

module.exports = mongoose.model("User", User);
