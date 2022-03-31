const router = require("express").Router();
const { createUser } = require("../controllers/login");

// router.get("/", getUser);
router.post("/user", createUser);

module.exports = router;
