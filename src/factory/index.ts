import { ApolloServer } from '@apollo/server';
import { typeDefs, resolvers } from './graphql/index.js'
export const GraphQL_Server = new ApolloServer({
    typeDefs,
    resolvers,
});

 