process.env.NODE_ENV = "test";

const { mongoose } = require("../config/mongoose");
const User = require("../models/user");
const { app } = require("../app");

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Auth Tests", () => {
  const newUser = {
    username: "Test User",
    email: "test@email.com",
    password: "this_is_a_password",
  };

  before((done) => {
    User.deleteMany({}, (err) => {});
    done();
  });

  after((done) => {
    mongoose.disconnect(() => done());
  });
  // describe("/POST /auth/register", (done) => {
  //   it("Should allow a user to register", (done) => {
  //     chai
  //       .request(app)
  //       .post("/auth/register")
  //       .send(newUser)
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //       });
  //     done();
  //   });
  // });
});
