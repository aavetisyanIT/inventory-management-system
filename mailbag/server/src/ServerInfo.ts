import path from "path";
import fs from "fs";

interface IServerInfo {
  smtp: {
    host: string;
    port: number;
    auth: { user: string; pass: string };
  };
  imap: {
    host: string;
    port: number;
    auth: { user: string; pass: string };
  };
}

export let serverInfo: IServerInfo;
const data: Buffer = fs.readFileSync(
  path.join(__dirname, "../serverInfo.json"),
);
const dataString = data.toString();
serverInfo = JSON.parse(dataString);
