require('dotenv').config()
const request = require('request')

 module.exports = {
    echo: (req, res) => {
        console.log ('connected to index')
    },
    
    list: (req, res) => {
        let options = {
            url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.TOP_NEWS_API}`,
            headers: {
              'User-Agent': 'request'
            }
        }
         request.get(options, (error, response, body) => {
            if(!error) {
               let data=JSON.parse(body)
               res.status(200).json(data)
            }      
            else 
            {
                res.status(500).json({
                    message: error.message
                })
            }
        })
    },
    
    countrylist: (req, res) => {
        // res.send(req.body.country)
        let options = {
            url: `https://newsapi.org/v2/top-headlines?country=${req.body.country}&apiKey=${process.env.TOP_NEWS_API}`,
            headers: {
              'User-Agent': 'request'
            }
        }
        // res.send(options)
         request.get(options, (error, response, body) => {
            //  res.send(body)
            // res.send(error)
            if(error){
                res.status(500).json({
                    message: error
                })
            }else{
                res.status(200).json(JSON.parse(body))
            }

        })

    }

}