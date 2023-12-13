import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Article = sequelize.define(
  "Article",
  {
    title: {
      type: DataTypes.TEXT,
      // allowNull: false,
      required: true,
    },
    category: {
      type: DataTypes.TEXT,

      required: true,
    },
    body: {
      type: DataTypes.TEXT,

      required: true,
    },
    author: {
      type: DataTypes.TEXT,

      required: true,
    },
    image: {
      type: DataTypes.STRING,

      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default Article;
