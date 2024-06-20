import express from 'express'

const router = express.Router()

const initRouter = (app) => {
    router.get('/', (req, res) => {
        res.send('Hello')
    })

    return app.use('/', router)
}
export default initRouter