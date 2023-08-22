import { mongoUser } from "../db/model.js";

export class User {
  async newUser(data) {
    var myData = new mongoUser(data);
    await myData.save();
    try {
    } catch (error) {
      return error;
    }
  }
}
