const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

// Connect to MongoDB Atlas
connectDB();

const app = express();

// Enable CORS only for your frontend
app.use(cors({
  origin: ['https://binge-x-movies-frontend.vercel.app'], // Vercel frontend URL
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

// Parse JSON
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
