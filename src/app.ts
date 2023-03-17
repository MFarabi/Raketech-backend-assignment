import cors from "cors";
import express from "express";
import helmet from "helmet";
import { urlencoded, json } from "body-parser";

const app: express.Application = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(helmet());
app.use(cors());

import config from "./configs";
app.set("config", config);

import router from "./routes";
app.use("/api", router);

export default app;
