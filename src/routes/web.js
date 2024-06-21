import express from 'express'
import controller from '../controller/homeController'

const router = express.Router()

const initRouter = (app) => {
    router.get('/', controller.homeController)
    router.post('/user/create-user', controller.handleCreateUserController)
    router.get('/user', controller.handleGetUserController)
    router.post('/delete/:id', controller.handleDeleteUserController)
    router.get('/update/:id', controller.handleGetUserByIdController)
    router.post('/update/user/:id', controller.handleUpdateUserByIdController)

    return app.use('/', router)
}
export default initRouter