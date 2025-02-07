import dotenv from "dotenv";
import logger from "./src/config/logger.js";
import connectDB from "./src/config/database.js";
import app from "./app.js"; // Ensure the correct file import

// Load Environment Variables
dotenv.config();
// Connect Database
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`);
  // console.log(`🚀 Server running on port ${PORT}`);
});
