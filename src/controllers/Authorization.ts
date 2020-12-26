import IUser from "authorization/IUser";
import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../interfaces/IControllerBase";
import AuthorizationRepository from "../authorization/Authorization";

class Authorization implements IControllerBase {
  public path = "/";
  public router = express.Router();
  public auth = new AuthorizationRepository();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post("/signUp", this.singUp);
    this.router.post("/signIn", this.singIn);
  }

  singUp = (req: Request, res: Response) => {
    const request: IUser = req.body;
    this.auth
      .signup(request)
      .then((s) => {
        console.log(s);
        res.send(s);
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send("Hataaa");
      });
  };

  singIn = (req: Request, res: Response) => {
    const request: IUser = req.body;
    this.auth
      .signIn(request)
      .then((data) => {
        if (data.ok) {
          res.send(data.message);
        } else {
          res.status(400).send(data.message);
        }
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send("Internal server error");
      });
  };
}

export default Authorization;
