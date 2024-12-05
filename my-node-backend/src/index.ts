import express, { Request, Response, NextFunction } from "express";
import authRoutes from "./routes/authRoutes";

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Logging Middleware (Optional: For debugging purposes)
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Routes
app.use("/api/auth", authRoutes);

// Health Check Endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send({ status: "OK", message: "Server is healthy!" });
});

// Global Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).send({ error: "An unexpected error occurred." });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

