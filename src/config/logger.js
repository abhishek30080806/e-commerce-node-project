// 📌 logger.js (Winston Logger Configuration)
import winston from "winston";
import path from "path";

const logDirectory = path.join("logs");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: path.join(logDirectory, "error.log"), level: "error" }),
    new winston.transports.File({ filename: path.join(logDirectory, "combined.log") }),
  ],
});

export default logger;
