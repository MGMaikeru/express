import express, { application } from "express";
import router from "./routes/api.route";

export class App {
  private app = application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.settings();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(router);
  }

  settings() {
    this.app.set("port", process.env.PORT || 3000);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port", this.app.get("port"));
  }
}
