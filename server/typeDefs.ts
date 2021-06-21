import { gql } from "apollo-server-express"

export default gql`
  type User {
    _id: String!
    email: String!
    ava: String
    color: String!
    firstname: String!
    lastname: String!
    role: String!
    date: String!
  }
  type Auth {
    userId: String
    token: String
  }
  type Query {
    getUser(userId: String!): User!
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
