import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

import router from "./routes/index.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const connectionString = process.env.MONGOURI;
const port = process.env.PORT;
const hostname = `http://localhost:${port}`;

mongoose
  .connect(connectionString)
  .then(() => console.log("Database connection established"))
  .catch((err) =>
    console.log("Unable to establish database connection" + "-" + err)
  );

app.listen(port, () => console.log(`Server listening on ${hostname}`));
