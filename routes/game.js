const router = require('express').Router()

const gameController = require('../controllers/gameController')

router.get('/', gameController.showGame)

router.get('/platform', gameController.showPlatform)

module.exports = router