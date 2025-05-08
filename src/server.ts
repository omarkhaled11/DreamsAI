import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import logger from "./lib/logger";
import interpretRouter from "./routes/interpret";
import dreamsRouter from "./routes/dreams";
import usersRouter from "./routes/users";

import "./db/supabase";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/interpret", interpretRouter);
app.use("/dreams", dreamsRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
  logger.info(`Dream AI server running at http://localhost:${port}`);
});
