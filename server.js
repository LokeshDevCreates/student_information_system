import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
(async () => {
  try {
    const db = await connectDB();
    app.locals.db = db;
    console.log("Database connection successful");
    const collections = await db.listCollections().toArray();
    console.log("Available collections:", collections.map(c => c.name));
    app.use("/api/auth", authRoutes);
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
})();
