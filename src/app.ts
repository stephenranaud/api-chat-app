import * as express from "express";
import { Express } from "express";

const app = express();

app.use((req, res) => {
  res.json({ message: "Hello" });
});

export default app;
