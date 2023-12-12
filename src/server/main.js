import express from "express";
import ViteExpress from "vite-express";
import http from "http";
import debug from "debug";
import logger from "morgan";
import cookieParser from "cookie-parser";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/hello", (req, res) => {
  res.send("Hello Vite!");
});

/**
 * Normalize a PORT into a number, string, or false.
 */

// PORT CONFIG
function normalizePort(val) {
  let PORT = parseInt(val, 10);

  if (isNaN(PORT)) {
    // named pipe
    return val;
  }

  if (PORT >= 0) {
    // PORT number
    return PORT;
  }

  return false;
}
const PORT = normalizePort(3001);
app.set("PORT", PORT);

// SERVER CONFIG
function onListening() {
  let addr = server.address();
  let bind = typeof addr === "string" ? "pipe " + addr : "PORT " + addr.PORT;
  debug("Listening on " + bind);
}
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

let name = "My App";

// fake app

debug("booting %o", name);

/**
 * Create HTTP server.
 */
let server = http.createServer(app, (req, res) => {
  debug(req.method + " " + req.url);
  res.end("hello\n");
});
/**
 * Listen on provided PORT, on all network interfaces.
 */
server.listen(PORT, "0.0.0.0", () => {
  console.log(`server legendario is listening on  http://localhost:${PORT}`);
});
server.on("error", onError);
server.on("listening", onListening);

ViteExpress.bind(app, server);
