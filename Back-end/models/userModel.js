import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.TEXT,
      required: true,
    },
    role: {
      type: DataTypes.BOOLEAN,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default User;
