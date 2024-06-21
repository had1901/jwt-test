import { ModulesOption } from '@babel/preset-env/lib/options';
import { Sequelize } from 'sequelize'


const sequelize = new Sequelize('jwt', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  })

  const connectDatabase = async () => {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }

export default connectDatabase 
  