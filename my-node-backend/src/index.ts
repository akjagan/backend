import express from "express";
import authRoutes from "./routes/authRoutes";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
