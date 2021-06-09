var express = require("express");
var router = express.Router();
var AuthController = require('../controllers/AuthController');


router.use(AuthController.checkToken);

router.get('/teste', '');
router.get('/teste', '');

module.exports = router;