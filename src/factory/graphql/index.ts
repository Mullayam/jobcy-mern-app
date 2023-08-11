
import { QueryTypefs, MutationTypeDefs } from "./combineGqlFile.js"
export { resolvers } from "./combineGqlFile.js"
export const typeDefs = `
    ${QueryTypefs}
    ${MutationTypeDefs}
`