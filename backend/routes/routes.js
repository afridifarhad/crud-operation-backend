// import express from 'express'
const express = require('express')
// import { Createuser } from '../controller/UserController'
const Createuser = require ('../controller/UserController')


const routes = express.Router()

routes.post('/create', Createuser)

// export default routes
module.exports = routes
// module.exports = Createuser