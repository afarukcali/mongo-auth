import { model, Schema, Model } from "mongoose";
import ITask from "../ITask";

const ITaskSchema: Schema = new Schema({
  description: { type: String, required: true },
});

const TaskSchema: Model<ITask> = model("Task", ITaskSchema);

export default TaskSchema;
