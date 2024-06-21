require('dotenv').config()
import express from 'express'
const app = express()
const PORT = process.env.PORT || 8888
import bodyParser from 'body-parser'
import configViewEngine from './config/viewsEngine'
import initRouter from './routes/web'
import connectDatabase from './config/connectDB'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// view engine 
configViewEngine(app)

// routes
initRouter(app)

// connect db
connectDatabase()


app.listen(PORT, (req, res) => {
    console.log("listening on " + PORT)
})