const {
  getGiftListById,
  addGiftList,
  updateGiftList,
  deleteGiftList,
} = require("../utils/giftList_utils");

const getGiftList = (req, res) => {
  getGiftListById(req).exec((error, gifts) => {
    if (error) {
      res.status(404);
      return res.send("Gift List not found");
    }
    res.send(gifts);
  });
};

const makeGiftList = (req, res) => {
  addGiftList(req)
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

const changeGiftList = (req, res) => {
  updateGiftList(req).exec((error, gifts) => {
    if (error) {
      res.status(404);
      return res.send("Gift List not found");
    }
    res.send(gifts);
  });
};

const removeGiftList = (req, res) => {
  deleteGiftList(req).exec((err, giftList) => {
    if (err) {
      res.status(500);
      return res.json({
        err: error.message,
      });
    }
    res.status(204);
    res.send("Deleted");
  });
};

module.exports = {
  getGiftList,
  makeGiftList,
  changeGiftList,
  removeGiftList,
};
