'use strict'

const request = require('request')

class MovieController {
    static showAllTvShows(req,res){
        const options = {
            url : 'http://api.tvmaze.com/schedule'
        }
        request.get(options,(err,response,body)=>{
            if(err){
                res.status(500).json({msg :err})
            }else{
                let data = JSON.parse(body);

                res.status(200).json({
                    msg: 'List of all TV shows',
                    data : data
                })
            }
        })
    }
}

module.exports = MovieController