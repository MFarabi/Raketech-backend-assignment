import mongoose from "mongoose";
import env from "../../configs";

const { DB_CONNECTION_STRING } = env;

export default async function dbConnect(): Promise<mongoose.Connection> {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    console.log("<<<< Connected to MongoDB >>>>");
    mongoose.Promise = global.Promise;
    const db: mongoose.Connection = mongoose.connection;
    return db;
  } catch (error) {
    console.error("MongoDB Connection Error: ", error);
    process.exit(1);
  }
}
