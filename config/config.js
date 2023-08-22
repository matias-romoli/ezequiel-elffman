import dotv from "dotenv";
dotv.config();

export const config = {
  PORT: process.env.PORT,
  DB: {
    URI: process.env.MONGO,
  },
};
