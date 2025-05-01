import express from "express";
import dotenv from "dotenv";
import interpretRouter from "./routes/interpret";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/interpret", interpretRouter);

app.listen(port, () => {
  console.log(`Dream AI server running at http://localhost:${port}`);
});
