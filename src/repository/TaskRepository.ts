import Model from "../models";
import TaskSchema from "../models/schemas/TaskSchema";
import BaseRepository from "./BaseRepository";
import * as mongoose from "mongoose";

class TaskRepository extends BaseRepository<Model.ITask> {
  constructor() {
    super(TaskSchema);
  }
}

export default TaskRepository;
