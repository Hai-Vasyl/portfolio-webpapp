import { Query as Q_Users, Mutation as M_Users } from "./users"

export default {
  Query: {
    ...Q_Users,
  },
  Mutation: {
    ...M_Users,
  },
}
