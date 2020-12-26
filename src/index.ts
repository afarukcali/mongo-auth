import App from "./app";

import * as bodyParser from "body-parser";
import * as cors from "cors";

import Home from "./controllers/Home";
import Task from "./controllers/Task";
import Authorization from "./controllers/Authorization";

const app = new App({
  port: 5001,
  controllers: [new Home(), new Task(), new Authorization()],
  middleWares: [bodyParser.json(), bodyParser.urlencoded({ extended: true }), cors()],
});

app.listen();
