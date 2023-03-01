import * as http from "node:http";

import app from "./app";
import { errorHandler } from "./helpers/errors-helpers";

const port = process.env.PORT || 3000;

app.set("port", port);

const server = http.createServer(app);

server.on("error", errorHandler);

server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

server.listen(port);
