const express = require("express");
const router = express.Router();
const { userAuthenticated } = require("../utils/auth_utils");

router.use(userAuthenticated);

// router.get("/:userId/giftlist", getGiftList);

// router.post("/:userId/giftlist", addGiftListItem)

module.exports = router;
