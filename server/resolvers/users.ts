import {
  checkIsEmpty,
  checkIsEmail,
  checkIfExists,
  comparePasswords,
  checkLength,
} from "../validation/main"
import { User } from "../models"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { config } from "dotenv"
import path from "path"
import { getColor } from "../helpers/color"

config({ path: path.resolve(__dirname, "../", "../", ".env") })
const { JWT_SECRET }: any = process.env

const Query = {
  getUser(_: any, { userId }: any) {
    try {
      return User.findById(userId).select("-password")
    } catch (error) {
      throw new Error(`Getting user data error: ${error.message}`)
    }
  },
}

const Mutation = {
  async loginUser(_: any, { email: _email, password }: any) {
    try {
      const { email }: { [key: string]: string } = checkIsEmpty({
        email: _email,
        password,
      })
      checkIsEmail({ email })

      const user = await checkIfExists({
        key: "email",
        value: _email,
        Modal: User,
        msg: "User with this email doesn't exists!",
      })
      comparePasswords({ password, hPass: user.password })

      const token = jwt.sign({ userId: user._id }, JWT_SECRET)
      return { userId: user._id, token }
    } catch (error) {
      throw new Error(error.message)
    }
  },
  async registerUser(
    _: any,
    {
      firstname: _firstname,
      lastname: _lastname,
      email: _email,
      password,
      role,
    }: any
  ) {
    try {
      const { firstname, lastname, email }: { [key: string]: string } =
        checkIsEmpty({
          firstname: _firstname,
          lastname: _lastname,
          email: _email,
          password,
        })
      checkLength({ params: { firstname, lastname }, max: 50 })
      checkIsEmail({ email })

      await checkIfExists({
        key: "email",
        value: _email,
        Modal: User,
        msg: "User with this email is already exists, choose another one!",
        isTrue: true,
      })

      const hashedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(12))

      const user = new User({
        email: _email,
        firstname: _firstname,
        lastname: _lastname,
        password: hashedPass,
        role,
        color: getColor(),
        date: new Date(),
      })
      const newUser = await user.save()

      const token = jwt.sign({ userId: newUser._id }, JWT_SECRET)
      return { userId: newUser.id, token }
    } catch (error) {
      throw new Error(error.message)
    }
  },
}

export { Query, Mutation }
