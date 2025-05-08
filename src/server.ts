import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import interpretRouter from "./routes/interpret";
import logger from "./lib/logger";
import morgan from "morgan";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/interpret", interpretRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
  logger.info(`Dream AI server running at http://localhost:${port}`);
});
