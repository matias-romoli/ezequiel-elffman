import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
  },
  email: {
    type: String,
  },
  plan: {
    type: String,
  },
});
export const mongoUser = mongoose.model("User", userSchema);
