const {
  getChildGiftListById,
  addChildGiftList,
  updateChildGiftList,
  deleteChildGiftList,
} = require("../utils/childGiftList_utils");

const getChildGiftList = (req, res) => {
  getChildGiftListById(req).exec((error, gifts) => {
    if (error) {
      res.status(404);
      return res.send("Childs Gift List not found");
    }
    res.send(gifts);
  });
};

const makeChildGiftList = (req, res) => {
  addChildGiftList(req)
    .then((giftList) => {
      res.status(200);
      console.log(giftList);
      res.send(giftList);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send("error");
    });
};

const changeChildGiftList = (req, res) => {
  updateChildGiftList(req).exec((error, gifts) => {
    if (error) {
      res.status(404);
      return res.send("Gift List not found");
    }
    res.send(gifts);
  });
};

const removeChildGiftList = (req, res) => {
  deleteChildGiftList
  (req).exec((err, giftList) => {
    if (err) {
      res.status(500);
      return res.json({
        err: err.message,
      });
    }
    res.status(202);
    res.send("Deleted");
  });
};

module.exports = {
  getChildGiftList,
  makeChildGiftList,
  changeChildGiftList,
  removeChildGiftList,
};
