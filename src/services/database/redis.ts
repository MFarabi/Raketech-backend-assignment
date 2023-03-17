import { createClient } from "redis";
import env from "../../configs";

const redisClient = createClient({
  url: "redis://" + env.REDIS_HOSTNAME + ":" + env.REDIS_PORT,
  username: env.REDIS_USERNAME,
  password: env.REDIS_PASSWORD,
});

redisClient.on("connect", async () => {
  console.log("<<<< Connected to redis instance! >>>>");
});

redisClient.on("disconnect", () => {
  console.warn("redis disconected");
});

redisClient.on("error", (err) => {
  console.log("redis error: " + err);
});

export async function redisConnect() {
  await redisClient.connect();
}

export function redisDisconnect() {
  redisClient.disconnect();
}

export default redisClient;
