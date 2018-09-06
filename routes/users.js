var express = require('express');
var router = express.Router();
var {login,register} = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',login)
router.post('/register',register)

module.exports = router;
