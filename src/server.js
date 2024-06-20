import express from 'express'
import configViewEngine from './config/viewsEngine'
require('dotenv').config()
import initRouter from './routes/web'

const PORT = process.env.PORT || 8888

const app = express()

// view engine 
configViewEngine(app)

// routes
initRouter(app)

app.listen(PORT, (req, res) => {
    console.log("listening on " + PORT)
})