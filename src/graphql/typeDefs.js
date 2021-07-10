import {fileLoader, mergeTypes} from 'merge-graphql-schemas';
import path from 'path';


const  typesArry = fileLoader(path.join(__dirname, 'modules', '**', '*.graphql'));
const  typeDefs = mergeTypes(typesArry);

console.log(typeDefs);

export default typeDefs;