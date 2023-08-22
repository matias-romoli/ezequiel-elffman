import { config } from "./config/config.js";
import { router } from "./routes/routes.js";
import { MongoDB } from "./db/mongo.js";
import { URL } from "./utils/utils.js";
import express from "express";
import path from "path";
import cors from "cors";
const app = express();
MongoDB();

app.use(cors());
const __dirname = URL(import.meta.url);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use("/", router);

app.listen(config.PORT, () => {
  console.log("Server connected");
});
