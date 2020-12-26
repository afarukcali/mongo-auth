import IUser from "./IUser";
import UserSchema from "./UserSchema";

import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

class Authorization {
  private mongoInstance = UserSchema;

  public signup = async (user: IUser): Promise<IUser> => {
    user.password = bcrypt.hashSync(user.password, 8);

    const newUser = await this.mongoInstance.create(user);
    return newUser;
  };

  public signIn = async (user: IUser): Promise<{ ok: boolean; message?: string }> => {
    const currentUser = await this.mongoInstance.findOne({
      username: user.username,
    });

    if (currentUser == null) return { ok: false, message: "User doesnt exist" };

    const passwordIsValid = bcrypt.compareSync(user.password, currentUser.password);

    if (!passwordIsValid) return { ok: false, message: "Pasword doesnt match" };

    const token = jwt.sign({ id: user.id, name: user.username }, "so secret", {
      expiresIn: 86400, // 24 hours
    });

    return { ok: true, message: token };
  };
}

export default Authorization;
