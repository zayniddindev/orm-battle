import { Model } from "objection";

export class User extends Model {
  static get tableName() {
    return "users";
  }

  id: number;
  name: string;
  email: string;
}
