import express, { Express, Request, Response, NextFunction } from "express";
import path from "path";

import * as IMAP from "./IMAP";
import * as SMTP from "./SMTP";
import * as Contacts from "./Contacts";
import { IContact } from "./Contacts";
import { serverInfo } from "./ServerInfo";

const app: Express = express();

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "../../client/dist")));
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept",
  );
});

app.listen(8080);
