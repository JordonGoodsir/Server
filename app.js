const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const giftListRouter = require("./routes/giftList_routes");
const userRouter = require("./routes/user_routes");
const authRouter = require("./routes/auth_routes");
const childGiftListRouter = require("./routes/childGiftList_routes");

const { mongooseConnect } = require("./config/mongoose");

const app = express();
const port = process.env.PORT || 3009;

const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors({origin: true, credentials: true}));

app.use(bodyParser.json());

// const NODE_ENV = process.env.MONGODB_URI || "mongodb://localhost/santa_site";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

mongooseConnect(process.env.NODE_ENV);

app.use(
  session({
    secret: "we love Santa",
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      maxAge: 1800000,
      sameSite: "none",
      secure: true,
      httpOnly: false,
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/giftlist", giftListRouter);
app.use("/dashboard", userRouter);
app.use("/lettertosanta", childGiftListRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Santa app listening on port ${port}!`));

module.exports = {
  app,
};
