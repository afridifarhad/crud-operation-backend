// import express from 'express'
const express = require('express')
// import { Createuser } from '../controller/UserController'
const {Createuser,GetUser, UpdateUser} = require ('../controller/UserController')



const routers = express.Router()

routers.post('/create', Createuser)
routers.get('/get', GetUser)
routers.put('/update/:id', UpdateUser )

// export default routes
module.exports = routers
// module.exports = Createuser