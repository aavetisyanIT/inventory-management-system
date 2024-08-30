import express, { Express, Request, Response, NextFunction } from "express";
import path from "path";

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
  next();
});

app.listen(8080);
