import * as http from "node:http";

import app from "./app";

const port = process.env.PORT || 3000;

app.set("port", port);

const server = http.createServer(app);

server.listen(port);
