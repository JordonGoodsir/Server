process.env.NODE_ENV = "test";
const expect = require("expect");

const { mongoose } = require("../config/mongoose");
const User = require("../models/user");
const GiftList = require("../models/giftList");
const { app } = require("../app");
const {
  getGiftListById,
  addGiftList,
  updateGiftList,
  deleteGiftList,
} = require("../utils/giftList_utils");
const chai = require("chai");
const chaiHttp = require("chai-http");
const {
  makeChildGiftList,
} = require("../controllers/childGiftList_controller");
const { makeGiftList } = require("../controllers/giftList_controller");
const should = chai.should();
chai.use(chaiHttp);

describe("GiftList Tests", () => {
  const testUser = new User({
    username: "Test User",
    email: "test@email.com",
  });

  let userId;
  before((done) => {
    done();
  });

  after((done) => {
    mongoose.connection;
    User.deleteMany({}, (err) => {}).then(() => {
      mongoose.disconnect();
    });
    done();
  });

//   describe("Test addGiftList", () => {
//     it("should add to gift list", () => {
//       testUser.save(async (err, user) => {
//         userId = user.id;
//         let req = {
//           params: {
//             userId: userId,
//           },
//           body: {
//             gifts: [{ gift: "toy" }],
//             receiver: "person",
//           },
//         };
//         await addGiftList(req).then();
//         await getGiftListById(req).exec((err, giftlist) => {
//           console.log(giftlist);
//           expect(giftlist.receiver).toBe("person");
//         });
//       });
//     });
//   });
//   // describe("/GET /giftlist/:userId", () => {
//   //   it("Should show a giftlist", (done) => {
//   //     const testUser = new User({
//   //       username: "Test User",
//   //       email: "test@email.com",
//   //     });
//   //     testUser.save((err, user) => {
//   //       user.save((err) => {
//   //         let giftList = new GiftList({
//   //           gifts: [{ gift: "toy" }],
//   //           user: user.id,
//   //           receiver: "person",
//   //         });
//   //         giftList.save();
//   //         chai
//   //           .request(app)
//   //           .get("/giftlist/" + user.id)
//   //           .end((err, res) => {
//   //             res.should.have.status(200);
//   //             res.body.receiver.should.be.eql("person");
//   //           });
//   //       });
//   //     });
//   //     done();
//   //   });
//   // });

//   // describe("/GET /giftlist/:userId", () => {
//   //   it("should get giftlist", (done) => {
//   //     User.find({ username: "Test User" }, (err, user) => {
//   //       GiftList.find({ user: user.id }, (err, giftlist) => {
//   //         console.log(giftlist);
//   //       });
//   //       // chai
//   //       //   .request(app)
//   //       //   .get("/giftlist/" + user.id)
//   //       //   .end((err, res) => {
//   //       //     console.log(res.body);
//   //       //     // res.body.gifts.gift.should.be.eql("toy");
//   //       //     // res.body.receiver.should.be.eql("person");
//   //       //     res.should.have.status(200);
//   //       //   });
//   //     });
//   //     done();
//   //   });
//   // });
});
