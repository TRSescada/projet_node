const express = require('express')
const router = express.Router()

const UserController = require ('../controllers/UserController')

router.get('/', UserController.index)
router.post('/show',UserController.show)
router.post('/store',UserController.store)

module.exports = router