import express from "express";
import ViteExpress from "vite-express";
import rutasDeHome from "../routes/rutas.routes.js";

const app = express();
// Routing
app.use("/", rutasDeHome);

ViteExpress.listen(app, 3000, () =>
  console.log("server legendario is listening on  http://localhost:3000")
);
