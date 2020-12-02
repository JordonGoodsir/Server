const express = require("express");
const router = express.Router();
const {
  getGiftList,
  makeGiftList,
  changeGiftList,
  removeGiftList,
} = require("../controllers/giftList_controller");
const { userAuthenticated } = require("../utils/auth_utils");

router.use(userAuthenticated);

// router.get("/:userId", getGiftList);

// router.post("/:userId", makeGiftList);

// router.patch("/:userId", changeGiftList);

// router.delete("/:userId", removeGiftList);

module.exports = router;
