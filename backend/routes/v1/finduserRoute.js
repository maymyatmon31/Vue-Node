const userController = require("../../controller/v1/userControl");

const router = require("express").Router();

router.get("/", userController.selectedUser);

module.exports = router;