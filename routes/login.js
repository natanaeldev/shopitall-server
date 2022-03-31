const router = require("express").Router();
const { createSignUpAccount, getUser } = require("../controllers/login");

router.get("/", getUser);
router.post("/user", createSignUpAccount);

module.exports = router;
