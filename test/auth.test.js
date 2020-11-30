const expect = require("expect");
const mongoose = require("mongoose");
const User = require("../models/user");
const { register, login, logout } = require("../controllers/auth_controller");

const databaseConnection = "mongodb://localhost/tooth_inc_test";

before((done) => connectToMongo(done));
after((done) => {
  mongoose.disconnect(() => done());
});

beforeEach(async () => {
  await clearData().exec();
  let user = await setupData();
  UserId = user._id;
});

function connectToMongo(done) {
  mongoose.connect(
    databaseConnection,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    },
    (error) => {
      if (error) {
        console.log("Error connecting to MongoDB");
        done();
      } else {
        console.log("Connected to test database");
        done();
      }
    }
  );
}

function setupData() {
  let date = Date.now();
  let testUser = {};
  testUser.username = "tester";
  testUser.email = "test@test.com";
  testUser.password = "password1";
  testUser.create_date = date;
  testUser.modified_date = date;
  return User.create(testUser);
}

describe("register", () => {
  let req = {
    body: {
      username: "testing",
      email: "testing@testing.com",
      password: "password",
    },
  };

  it("should add a new user", async () => {
    await register(req);
    const user = await User.find();
    expect(user.length).toBe(1);
  });
});

function clearData() {
  return User.deleteMany();
}
