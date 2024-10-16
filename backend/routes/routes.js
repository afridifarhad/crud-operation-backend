// import express from 'express'
const express = require('express')
// import { Createuser } from '../controller/UserController'
const {Createuser,GetUser} = require ('../controller/UserController')



const routers = express.Router()

routers.post('/create', Createuser)
routers.get('/get', GetUser)

// export default routes
module.exports = routers
// module.exports = Createuser