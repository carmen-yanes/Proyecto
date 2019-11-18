var express = require('express');
var router = express.Router();
const registerController = require
("./../controllers/RegisterControllers");

router.get("/", registerController.getRegister);
router.post("/", registerController.insert);
router.get("/:id", registerController.getOneRegister);
module.exports = router;
