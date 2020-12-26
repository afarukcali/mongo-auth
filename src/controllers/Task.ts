import * as express from "express";
import { Request, Response } from "express";
import TaskRepository from "../repository/TaskRepository";
import IControllerBase from "../interfaces/IControllerBase";
import Model from "../models";

class Task implements IControllerBase {
  public path = "/";
  public router = express.Router();
  public taskRepository = new TaskRepository();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/task", this.getAll);
    this.router.post("/task", this.insert);
    this.router.put("/task", this.update);
    this.router.delete("/task", this.delete);
  }

  getAll = (req: Request, res: Response) => {
    this.taskRepository
      .GetAll()
      .then((list) => {
        res.send(list);
      })
      .catch(() => {
        res.status(500).send("Server Error");
      });
  };

  insert = (req: Request, res: Response) => {
    const params: Model.ITask = req.body;
    this.taskRepository
      .Insert(params)
      .then((list) => {
        res.send(list);
      })
      .catch(() => {
        res.status(500).send("Server Error");
      });
  };

  update = (req: Request, res: Response) => {
    const params: Model.ITask = req.body;
    this.taskRepository
      .Update(params)
      .then((list) => {
        res.send(list);
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send("Server Error");
      });
  };

  delete = (req: Request, res: Response) => {
    const params: Model.ITask = req.body;
    this.taskRepository
      .Delete(params)
      .then((list) => {
        res.send(list);
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send("Server Error");
      });
  };
}

export default Task;
