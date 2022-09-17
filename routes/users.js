var express = require('express');
var router = express.Router();
const {register,registerValidation} =require('../controllers/registerControllers');
const registerValidator = require("../validators/registerValidator");

/* GET users listing. */
router.get('/', register);
router.post('/', registerValidator ,registerValidation);




module.exports = router;
