const router = require('express').Router()

const gameController = require('../controllers/gameController')

router.get('/', gameController.showGame)

router.get('/platforms', gameController.showPlatform)

router.get('/platform/:id', gameController.showPlatformGame)

module.exports = router