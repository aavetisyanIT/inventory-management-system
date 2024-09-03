import Mail from "nodemailer/lib/mailer";
import * as nodemailer from "nodemailer";
import { SendMailOptions, SentMessageInfo } from "nodemailer";
import { IServerInfo } from "./ServerInfo";

export class Worker {
  private static serverInfo: IServerInfo;
  constructor(inServerInfo: IServerInfo) {
    Worker.serverInfo = inServerInfo;
  }
  public setMessage(options: SendMailOptions): Promise<string> {
    return new Promise((resolve, reject) => {
      const transporter: Mail = nodemailer.createTransport(
        Worker.serverInfo.smtp,
      );
      transporter.sendMail(
        options,
        (error: Error | null, info: SentMessageInfo) => {
          console.log("sendMail info", info);
          if (error) {
            reject(error);
            return;
          }
          resolve("");
        },
      );
    });
  }
}

export {};
