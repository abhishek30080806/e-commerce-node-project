import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";
import { errorHandler } from "./src/middlewares/error.middleware.js";
import authRoutes from "./src/routes/auth.routes.js";
// import userRoutes from "./src/routes/user.routes.js";
// import productRoutes from "./src/routes/product.routes.js";
// import orderRoutes from "./src/routes/order.routes.js";
// import paymentRoutes from "./src/routes/payment.routes.js";
// import reviewRoutes from "./src/routes/review.routes.js";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

// Rate Limiting (Security)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/payments", paymentRoutes);
// app.use("/api/reviews", reviewRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
