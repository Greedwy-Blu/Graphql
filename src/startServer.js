import {ApolloServer} from 'apollo-server';
import {Sequelize} from 'sequelize';


function startServer({typeDefs, resolvers}){

    const sequelize = new Sequelize('graphql', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
      });

    const  server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) =>console.log(`Server starded at ${url}`));
}


export default startServer;