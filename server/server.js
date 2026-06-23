const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const songRoutes = require("./routes/songRoutes");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(
    cors({
        origin: [
            "https://beat-byte-v2.vercel.app",
            "http://localhost:5173"
        ],
        credentials: true,
    })
);
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("BeatByte API Running...");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/songs", songRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});