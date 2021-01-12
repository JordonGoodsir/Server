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

router.get("/:childUid", getChildGiftList);

// router.post("/:childUid", makeChildGiftList);

// router.patch("/:childUid", changeChildGiftList);

// router.delete("/:childUid", removeChildGiftList);

module.exports = router;
