const express = require('express')
const router = express.Router()

const game = require('../controllers/gamesController')
const gameController = require('../controllers/gamesController')

router.get('/', game.index)

module.exports = router
