const {
  getChildGiftListById,
  addChildGiftList,
  updateChildGiftList,
  deleteChildGiftList,
} = require("../utils/childGiftList_utils");

const getChildGiftList = (req, res) => {
  // getChildGiftListById(req)
  //   .then((child) => {
  //     res.send(child);
  //   })
  //   .catch((err) => res.json({ error: err }));
  getChildGiftListById(req).exec((error, gifts) => {
    if (error) {
      res.status(404);
      return res.send("Childs Gift List not found");
    }
    res.send(gifts);
  });
};

const makeChildGiftList = (req, res) => {};

const changeChildGiftList = (req, res) => {};

const removeChildGiftList = (req, res) => {};

module.exports = {
  getChildGiftList,
  makeChildGiftList,
  changeChildGiftList,
  removeChildGiftList,
};
