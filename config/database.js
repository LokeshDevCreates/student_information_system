import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGO_URI;
const client = new MongoClient(mongoUri);

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("test");
    return db; 
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default client;
