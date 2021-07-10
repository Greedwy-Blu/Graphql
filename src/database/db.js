import {Sequelize} from 'sequelize';


const sequelize = new Sequelize('graphql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  module.exports = sequelize;