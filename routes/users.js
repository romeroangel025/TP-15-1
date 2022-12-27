var express = require('express');
var router = express.Router();
const {register,registerValidation,login,valid,logout} =require('../controllers/registerControllers');
const registerValidator = require("../validators/registerValidator");

/* GET users listing. */
router.get('/', register);
router.post('/', registerValidator ,registerValidation);
router.get("/login", login)
router.post("/login", registerValidator, login)
router.get("/valid", valid);
router.get("/logout", logout);




module.exports = router;
