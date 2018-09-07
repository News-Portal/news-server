var express = require('express');
const listNews=require('../controllers/news.js').list
const countryNews=require('../controllers/news.js').countrylist

var router = express.Router();

/* GET users listing. */
router.get('/top-news',listNews)
router.post('/country-news',countryNews)

module.exports = router;
