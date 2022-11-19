import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
});

export default model("User", userSchema);
