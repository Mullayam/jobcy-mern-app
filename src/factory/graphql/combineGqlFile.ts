import { User } from "./user/index.js"


/**  Write here only All typedefs Query Schema for every gql query */
export const QueryTypefs = `#graphql
  type Query {

     ${User.typesDefs.TypeDefQuerySchema}

  }  
`;
/**  Write here only All typedefs mutation Schema for every gql query */

export const MutationTypeDefs = `#graphql
type Mutation {

    ${User.typesDefs.TypeDefMutationSchema}


}   
`;
/**  Write here only All Resolvers Schema for every gql query */

export const resolvers = {
  // query schmea resolvers goes here
  Query: {
    ...User.resolvers.queries
  },
  // mutation schmea resolvers goes here

  Mutation: {
    ...User.resolvers.mutations
  }
}