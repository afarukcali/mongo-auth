import * as mongoose from "mongoose";
import { UpdateQuery } from "mongoose";

class BaseRepository<T extends mongoose.Document> {
  private _model: mongoose.Model<T>;
  constructor(schemaModel: mongoose.Model<T>) {
    this._model = schemaModel;
  }

  public async GetAll(): Promise<T[]> {
    const items = await this._model.find({});
    return items;
  }

  public async Insert(param: T): Promise<T> {
    const item = await this._model.create(param);
    return item;
  }

  public async Update(param: any): Promise<T> {
    const item = await this._model.updateOne({ _id: param._id }, param);
    return item;
  }

  public async Delete(param: T): Promise<T> {
    const item = await this._model.deleteOne({ _id: param._id });
    return item;
  }
}

export default BaseRepository;
