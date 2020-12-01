const express = require("express");
const router = express.Router();
const { getUser, makeChild } = require("../controllers/user_controller");
const { userAuthenticated } = require("../utils/auth_utils");

router.use(userAuthenticated);

// router.get("/:userId", getUser);

// router.post("/:userId/addchild", makeChild);

module.exports = router;
