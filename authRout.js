const  Router = require('express').Router
const authController = require('./authController')
const  router = new Router()

// router.post('/login', controller.login)
// router.post('/auth/register', controller.registration)
router.post('/registration', authController.registration)

module.exports = router