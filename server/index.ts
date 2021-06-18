import express from "express"
import { ApolloServer, gql } from "apollo-server-express"
import path from "path"
import mongoose from "mongoose"
import { config } from "dotenv"
import typeDefs from "./typeDefs"
import resolvers from "./resolvers"
// import isAuth from "./context/isAuth"
import cors from "cors"

config({ path: path.resolve(__dirname, "../", "../", ".env") })
const { PORT, MONGO_USER, MONGO_PASS, MONGO_DB, NODE_ENV } = process.env
const isDev = NODE_ENV === "development"

;(async () => {
  try {
    const app = express()
    app.use(cors())

    await mongoose.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.osxef.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      () => console.log("MongoDB started successfully!")
    )

    const server = new ApolloServer({
      resolvers,
      typeDefs,
      playground: isDev,
      context: ({ req, res }: { req: any; res: any }) => ({
        req,
        res,
        // isAuth: isAuth(req),
      }),
    })
    server.applyMiddleware({ app })

    if (!isDev) {
      app.use(express.static(path.join(__dirname, "../", "client")))
      app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "../", "client", "index.html"))
      })
    }

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
  } catch (error) {
    console.error(`Server error: ${error.message}`)
  }
})()
