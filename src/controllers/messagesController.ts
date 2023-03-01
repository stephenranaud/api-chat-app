import * as express from "express";

export function index(req: express.Request, res: express.Response) {
  res.send("Api index messages");
}
