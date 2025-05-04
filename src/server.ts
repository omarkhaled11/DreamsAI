import express from "express";
import dotenv from "dotenv";
import interpretRouter from "./routes/interpret";
import path from "path";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/interpret", interpretRouter);

// Serve index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
  console.log(`Dream AI server running at http://localhost:${port}`);
});
