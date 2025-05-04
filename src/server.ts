import express from "express";
import dotenv from "dotenv";
import interpretRouter from "./routes/interpret";
import path from "path";
import winston from "winston";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/interpret", interpretRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
  logger.info(`Dream AI server running at http://localhost:${port}`);
});
