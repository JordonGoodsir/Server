const express = require("express");
const router = express.Router();
const {
  getChildGiftList,
  makeChildGiftList,
  changeChildGiftList,
  removeChildGiftList,
} = require("../controllers/childGiftList_controller");
const { userAuthenticated } = require("../utils/auth_utils");

// router.use(userAuthenticated);

router.get("/:userId/:childName", getChildGiftList);

// router.post("/:userId/:childName", makeChildGiftList);

// router.patch("/:userId/:childName", changeChildGiftList);

// router.delete("/:userId/:childName", removeChildGiftList);

module.exports = router;
