const axios = require('axios')
require('dotenv').config()

const getLatestNews = function (req, res) {
    axios({
        method: "GET",
        url: "https://api.currentsapi.services/v1/latest-news",
        headers: {
            Authorization: process.env.CURRENTS_TOKEN
        }
    })
        .then(function ({ data }) {
            res.status(200).json({
                message: "Data found",
                data: data
            })
        })
        .catch(function (err) {
            res.status(400).json({
                message: "Data not found",
                error: err.message
            })
        })
}

module.exports = { getLatestNews }