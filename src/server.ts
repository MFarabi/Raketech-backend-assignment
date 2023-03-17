import express from "express";
import env from "./configs";
import dbConnect from "./services/database/mongo";
import { redisConnect } from "./services/database/redis";
import app from "./app";

const { SERVER_PORT } = env;

const server: express.Application = express();

async function startServer(server: express.Application): Promise<void> {
  server.use(app);
  const port = SERVER_PORT || 3000;
  server.listen(port, () => {
    console.log(`API is now running on port ${port}`);
  });
}

(async () => {
  try {
    await redisConnect();
    await dbConnect();
    await startServer(server);
  } catch (error) {
    throw Error(`>>>>> Server Connection Error: ${error}`);
  }
})();
