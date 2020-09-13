import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
require("dotenv").config();

//basic setup
const PORT: number = 3001;
const server = express();
server.use(cors());
server.use(helmet());
server.use(bodyParser.json());

//routes
import formRouter from "./routes/forms";
server.use(formRouter); //the reason for the suffix was how proxy_pass works

//error handler
server.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
});

//Unknown Route Handler
server.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Unknown Route." });
});

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at localhost:${PORT}`);
});
