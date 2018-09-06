const axios = require('axios')

module.exports = {
    jobsGit: function(req,res){
        axios({
            method: 'get',
            url: 'https://jobs.github.com/positions.json',
            jsonp: true
        })
        .then(jobs =>{
            res.status(200).json({
                message: 'Success read all jobs',
                jobs:jobs.data
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: err.message
            })
        })
    },

    searchJob: function(req,res){
        let url = `https://jobs.github.com/positions.json?search=${req.body.language}`
        axios({
            method: 'get',
            url:url,
            jsonp: true
        })
        .then(jobs =>{
            res.status(200).json({
                message: 'Success read all jobs',
                jobs:jobs.data
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: err.message
            })
        })
    }
}