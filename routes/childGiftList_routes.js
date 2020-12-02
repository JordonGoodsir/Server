const express = require("express");
const router = express.Router();
const {
  getChildGiftList,
  makeChildGiftList,
  changeChildGiftList,
  removeChildGiftList,
} = require("../controllers/childGiftList_controller");
const { userAuthenticated } = require("../utils/auth_utils");

router.use(userAuthenticated);

// router.get("/:userId/:childname", getChildGiftList);

// router.post("/:userId/:childname", makeChildGiftList);

// router.patch("/:userId/:childname", changeChildGiftList);

// router.delete("/:userId/:childname", removeChildGiftList);

module.exports = router;
