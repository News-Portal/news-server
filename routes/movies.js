'use strict'

const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/MovieController')


router.get('/',(req,res)=>{
    MovieController.showAllTvShows(req,res);
})

router.post('/details',(req,res)=>{
    MovieController.showDetails(req,res);
})

router.post('/search',(req,res)=>{
    MovieController.getSearch(req,res);
})

module.exports = router