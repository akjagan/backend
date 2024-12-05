import express, { Application } from "express";
import emailRoutes from "./routes/emailRoutes";

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", emailRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

