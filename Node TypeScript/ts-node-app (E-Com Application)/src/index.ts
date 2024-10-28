import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello welcome to my TypeScript Server!!");
});

app.listen(PORT, () => {
  console.log(`Server is running of ${PORT}`);
});
