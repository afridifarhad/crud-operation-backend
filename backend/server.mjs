import express from 'express'
import dbCon from './utils/db.js'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import cors from 'cors'

dotenv.config()


const app = express()
dbCon() 

app.use(express.json())
app.use(cors())


app.use('/api', routes)

app.listen(4000, () => {
    console.log("server is listen port No 4000")
})