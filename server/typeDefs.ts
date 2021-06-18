import { gql } from "apollo-server-express"

export default gql`
  type Auth {
    userId: String
    token: String
  }
  type Query {
    sayHello: String!
  }
  type Mutation {
    loginUser(email: String!, password: String!): Auth!
    registerUser(
      firstname: String!
      lastname: String!
      email: String!
      password: String!
      role: String
    ): Auth!
  }
`
