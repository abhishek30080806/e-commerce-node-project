import mongoose from "mongoose";
import logger from "./logger.js";
import { config } from "./env.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URL)
    logger.info(`✅ MongoDB Connected: ${conn.connection.host}`);
  }
  catch (err) {
    console.log('eror-:', err)
    logger.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
}

export default connectDB