import { model, Schema, Model } from "mongoose";
import IUser from "./IUser";

const IUserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserSchema: Model<IUser> = model("User", IUserSchema);

export default UserSchema;
