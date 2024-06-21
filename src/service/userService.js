import bcrypt from 'bcryptjs'
import mysql from 'mysql2/promise'
import bluebird from 'bluebird';

// create the connection to database


const salt = bcrypt.genSaltSync(10)

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt)
    return hashPassword
}

const createNewUser = async (email, username, password) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird,
  })
    let hashPass = hashPassword(password)
    try {
      const [results, fields] = await connection.execute( 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, hashPass])
      return results
    } catch(err) {
      console.log(err)
    }
}

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird,
  })
    let users = []
    try {
      const [results, fields] = await connection.execute('SELECT * FROM users')
      return results
    } catch(err) {
      console.log(err)
    }
}

const deleteUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird,
  })
    try {
      const [results, fields] = await connection.execute('DELETE FROM users WHERE id = ?', [id])
      return results
    } catch(err) {
      console.log(err)
    }
}

const getUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird,
  })
    try {
      const [results, fields] = await connection.execute('SELECT * FROM users WHERE id = ?', [id])
      return results
    } catch(err) {
      console.log(err)
    }
}

const updateUserById = async (email, username, id) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird,
  })
    try {
      const [results, fields] = await connection.execute('UPDATE users SET email = ?, username= ? WHERE id = ?', [email, username, id])
      return results
    } catch(err) {
      console.log(err)
    }
}

module.exports = {
    hashPassword,
    createNewUser,
    getUserList,
    deleteUserById,
    getUserById,
    updateUserById
}