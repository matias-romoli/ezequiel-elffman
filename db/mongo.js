import { config } from "../config/config.js";
import mongoose from "mongoose";
const uri = config.DB.URI;

export async function MongoDB() {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    return error;
  }
}

