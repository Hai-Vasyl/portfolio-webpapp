import { Schema, model } from "mongoose"

const schema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  ava: {
    type: String,
    default: "",
  },
  color: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  date: { type: Date, required: true },
})

export default model("User", schema)
