import {fileLoader, mergeResolvers} from 'merge-graphql-schemas';
import path from 'path';


const  resolversArry = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'));
const  resolvers = mergeResolvers(resolversArry);

console.log(resolvers);

export default resolvers;