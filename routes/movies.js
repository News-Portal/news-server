'use strict'

const express = require('express');
const router = express.Router();
const MovieController = require('../MovieController/MovieController');


router.get('/',(req,res)=>{
    MovieController.showAllTvShows(req,res);
})

module.exports = router