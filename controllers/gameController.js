const axios = require('axios')

class Controller {
  
  static showGame(req, res) {
    Controller.getGameId()
      .then(ids => {
        Controller.getGame(req, res, ids)
          .then(games => {
            res.status(200).send(games)    
          })
      })
      .catch(err => {
        res.status(500).json({error: err.message})
      })
  }
  
  static getGame(req, res, ids) {
    return new Promise((resolve, reject) => {
      let objGames = []

      ids.forEach(id => {
        axios({
          url: `https://api-endpoint.igdb.com/games/${id}`,
          headers: {
            "user-key": process.env.IGDB_API,
            Accept: "application/json"
          }
        })
          .then(response => {
            objGames.push(response.data[0])
            if (objGames.length === 10) {
              resolve(objGames)
            }
          })
          .catch(err => {
            reject(err)
          })
      })
    })
  }
  
  static getGameId(req, res) {
    return new Promise((resolve, reject) => {
      let games = []
      
      axios({
        method:'get',
        url:'https://api-endpoint.igdb.com/games/',
        headers: {
          "user-key": process.env.IGDB_API,
          Accept: "application/json"
        }
      })
        .then(response => {
          response.data.forEach(game => {
            games.push(game.id)
          })
          resolve(games)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  
  static showPlatform(req, res) {
    Controller.getPlatformId()
      .then(ids => {
        Controller.getPlatform(req, res, ids)
          .then(platforms => {
            res.status(200).json(platforms)
          })
      })
      .catch(err => {
        res.send(500).json({error: err.message})
      })
  }
  
  static getPlatformId(req, res) {
    return new Promise((resolve, reject) => {
      let platforms = []
      
      axios({
        method:'get',
        url:'https://api-endpoint.igdb.com/platforms/',
        headers: {
          "user-key": process.env.IGDB_API,
          Accept: "application/json"
        }
      })
        .then(response => {
          response.data.forEach(platform => {
            platforms.push(platform.id)
          })
          resolve(platforms)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  
  static getPlatform(req, res, ids) {
    return new Promise((resolve, reject) => {
      let objPlatforms = []

      ids.forEach(id => {
        axios({
          url: `https://api-endpoint.igdb.com/platforms/${id}`,
          headers: {
            "user-key": process.env.IGDB_API,
            Accept: "application/json"
          }
        })
          .then(response => {
            objPlatforms.push(response.data[0])
            if (objPlatforms.length === ids.length) {
              resolve(objPlatforms)
            }
          })
          .catch(err => {
            reject(err)
          })
      })
    })
  }
  
  static showPlatformGame(req, res) {
    Controller.getPlatform(req, res, [req.params.id])
      .then(platform => {
        Controller.getGame(req, res, platform[0].games)
          .then(games => {
            res.status(200).json(games)
          })
      })
      .catch(err => {
        res.status(500).json({error: err.message})
      })
  }
  
}

module.exports = Controller