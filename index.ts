import { Request, Response, Application, NextFunction } from "express";
const cors = require("cors");
const express = require("express");
const db = require("./models/db");

const port: number = 3000;

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response): void => {
  res.send("hello world");
});

app.post("/image", (req: Request, res: Response): void => {
  console.log(req.method, req.originalUrl);
  res.send("ok");
});

app.listen(port, (): void => {
  console.log(`Listening on ${port}`);
});
