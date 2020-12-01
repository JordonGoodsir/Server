const express = require("express");
const router = express.Router();
const { userAuthenticated } = require("../utils/auth_utils");

router.use(userAuthenticated);

// router.get("/:userId", getUser);

// router.post("/:userId/addchild", addChild)

// router.get("/:userId/:childname", getChildGiftList)

// router.post("/:userId/:childname", addToChildGiftList)

module.exports = router;
