import express, { Express } from "express";
import path from "path";

const app: Express = express();

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "../../client/dist")));

app.listen(8080);
