const {
  getChildGiftListById,
  addChildGiftList,
  updateChildGiftList,
  deleteChildGiftList,
} = require("../utils/childGiftList_utils");

const getChildGiftList = (req, res) => {
  getChildGiftListById(req)
    .then((child) => {
      res.send(child);
    })
    .catch((err) => res.json({ error: err }));
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
