import jwt from "jsonwebtoken"
import { config } from "dotenv"
import path from "path"
config({ path: path.resolve(__dirname, "../", "../", ".env") })
const { JWT_SECRET }: any = process.env

const isAuth = (req: {
  headers: { authorization: string }
}): { userId: string } => {
  const auth = req && req.headers && req.headers.authorization

  if (!auth) {
    throw new Error("Access denied!")
  }

  const token = auth.split(" ")[1]
  if (!token) {
    throw new Error("Access denied!")
  }

  let decodedToken: string
  try {
    const { userId }: any = jwt.verify(token, JWT_SECRET)
    decodedToken = userId
  } catch (error) {
    throw new Error("Access denied!")
  }
  if (!decodedToken) {
    throw new Error("Access denied!")
  }

  return {
    userId: decodedToken,
  }
}

export default isAuth
