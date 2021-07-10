import {Sequelize} from 'sequelize';
import database from '../database/db';
 

const Post = database.define('post', {
  Title: {
    type: Sequelize.STRING,
     allowNull: false
  },
 content: {
    type: Sequelize.STRING,
    allowNull: false
  },
 author: {
      type: Sequelize.STRING,
      allowNull: false,
      references: { // <--- is this redundant to associate
          model: 'User'
         
        }
     
    }
  
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = Post;