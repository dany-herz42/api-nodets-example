import express from "express";
import { userRoutes } from "./routes";

const app = express();

app.use(express.json())

app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log("Server on port: 3000");
  console.log("http://localhost:3000/")
});
