import { Schema, model } from "mongoose";

interface UserInterface extends Document{
  name?: string
  email?: string
  age?: number
}

const UserSchema = new Schema ({
  name: String,
  email: String,
  age: Number
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)