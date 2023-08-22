import express from "express";

import { body, validationResult } from "express-validator";
import { data } from "../controllers/controllers.js";
import { URL } from "../utils/utils.js";
const __dirname = URL(import.meta.url);
export const router = express.Router();
import path from "path";

router.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});
router.post(
  "/data",
  body("nombre", "*Los campos no pueden estar vacios.")
    .exists()
    .trim()
    .not()
    .isEmpty(),
  body("apellido", "*Los campos no pueden estar vacios.")
    .exists()
    .trim()
    .not()
    .isEmpty(),
  body("email", "*Los campos no pueden estar vacios.")
    .exists()
    .trim()
    .not()
    .isEmpty(),
  body("plan", "*Los campos no pueden estar vacios.")
    .exists()
    .trim()
    .not()
    .isEmpty(),
  body("email", "*Por favor, ingrese un email valido.").isEmail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(500).json({ errors: errors.array() });
    }
    next();
  },
  data
);
