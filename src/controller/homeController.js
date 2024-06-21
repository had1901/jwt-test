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

const handleGetUserByIdController = async (req, res) => {
    let id = req.params.id
    // let email = req.params.email
    // let username = req.params.username
    let userList = await userService.getUserById(id)
    if(userList && userList.length > 0) {
        res.render('update.ejs', {userList: userList})
        console.log('userList', userList)
    }
}

const handleUpdateUserByIdController = async (req, res) => {
    let id = req.params.id
    let email = req.body.email
    let username = req.body.username
    console.log(id)
    await userService.updateUserById(email, username, id)
    res.redirect('/user')
}

module.exports = {
    homeController,
    handleCreateUserController,
    handleGetUserController,
    handleDeleteUserController,
    handleGetUserByIdController,
    handleUpdateUserByIdController
}