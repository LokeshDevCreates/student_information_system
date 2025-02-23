import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/login", async (req, res) => {
  const { username, dob } = req.body;

  if (!username || !dob) {
    return res.status(400).json({ message: "Missing Register Number or DOB" });
  }

  console.log("Username received from request:", username);
  try {
    const db = req.app.locals.db;

    console.log("Querying database with:", { rollNumber: username });

    const user = await db.collection("students").findOne({ rollNumber: username });

    console.log("User found in database:", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.dob !== dob) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.rollNumber },
      JWT_SECRET, 
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", user, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
