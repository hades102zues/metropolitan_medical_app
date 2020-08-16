import express, { Request, Response, NextFunction } from "express";

import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
require("dotenv").config();

const PORT: number = 3001;
const server = express();
server.use(cors());
server.use(helmet());
server.use(bodyParser.json());

//error handler
server.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
});

//Unknown Route Handler
server.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Unknown Route." });
});

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
