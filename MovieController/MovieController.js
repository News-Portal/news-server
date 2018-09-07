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

    static showDetails(req,res){
        const options = {
            url : 'http://api.tvmaze.com/schedule'
        }
        request.get(options,(err,response,body)=>{
            if(err){
                res.status(500).json({msg : err});
            }else{
                let data = JSON.parse(body);
                let arrDetail = []
                data.forEach(individualMovie => {
                    if(individualMovie['name']===req.body.name){
                        arrDetail.push(individualMovie)
                    }
                });

                res.status(200).json({
                    msg: `Detail of episodes with name ${req.body.name}`,
                    data: arrDetail
                })
                // console.log(req.body.name,data);
            }
        });
    }

    static getSearch(req,res){
        const options = {
            url: 'http://api.tvmaze.com/schedule'
        }
        request.get(options,(err,response,body)=>{
            if(err){
                res.status(500).json({msg : err});
            }else{
                let data = JSON.parse(body)

                let sortedArr = []
                let regex = new RegExp(`${req.body.name}`,'i');

                data.forEach(episode => {
                    // console.log('TEST',regex.test(data['name']))
                    if(regex.test(episode['name'])){
                        sortedArr.push(episode)
                    }
                });
                res.status(200).json({
                    msg: `List episodes with name like ${req.body.name}`,
                    data : sortedArr
                })
            }
        })
    }
}

module.exports = MovieController