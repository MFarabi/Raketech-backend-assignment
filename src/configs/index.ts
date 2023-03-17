import dotenv from "dotenv";
import { EnvironmentModel } from "./types";
dotenv.config();

const env = JSON.parse(JSON.stringify(process.env)) as EnvironmentModel;

export default env;
