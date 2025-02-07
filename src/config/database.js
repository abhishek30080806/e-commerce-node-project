import mongoose from "mongoose";
import logger from "./logger.js";

const connectDB = async () => {
  try {
      const conn = await mongoose.connect(process.env.MONGO_URL)
      logger.info(`✅ MongoDB Connected: ${conn.connection.host}`);
  }
  catch (err) {
    logger.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
}

export default connectDB