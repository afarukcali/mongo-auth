import { Document } from "mongoose";

interface ITask extends Document {
  description: string;
}

export default ITask;
