import * as mongoose from "mongoose";

class Mongo {
  constructor() {
    this.setupDb();
  }

  private setupDb(): void {
    const mongoDb = "YOUR_URL";

    mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    mongoose.connection.on("open", () => {
      console.info("Connected Mongo.");
    });
    mongoose.connection.on("error", (err: any) => {
      process.exit();
    });
  }
}

export default Mongo;
