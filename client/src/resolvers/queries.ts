import { gql } from "@apollo/client"

export const GET_USER_DATA = gql`
  query GET_USER_DATA($userId: String!) {
    getUser(userId: $userId) {
      _id
      email
      ava
      color
      firstname
      lastname
      role
      date
    }
  }
`
