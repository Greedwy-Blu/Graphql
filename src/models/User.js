import {Sequelize} from 'sequelize';
import database from '../database/db';
 

const User = database.define('user', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
  email: {
        type: Sequelize.STRING,
      },
      active:{
        type: Sequelize.BOOLEAN,
        allowNull: false

   
      }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
  
  module.exports = User;