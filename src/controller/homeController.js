import userService from '../service/userService'



const homeController = (req, res) => {
    res.render('home.ejs')
}

const handleCreateUserController = (req, res) => {
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    userService.createNewUser(email, username, password)
    
    res.redirect('/user')
}

const handleGetUserController = async (req, res) => {
    let userList = await userService.getUserList()
    console.log('userList', userList)
    res.render('user.ejs', { userList: userList })
}

const handleDeleteUserController = async (req, res) => {
    let id = req.params.id
    await userService.deleteUserById(id)
    let userList = await userService.getUserList()

    res.render('user.ejs', { userList: userList })
}

module.exports = {
    homeController,
    handleCreateUserController,
    handleGetUserController,
    handleDeleteUserController,
}