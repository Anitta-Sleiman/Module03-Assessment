import express from "express";
import dotenv from "dotenv";
dotenv.config();
import sequelize from "./db.js";
import cors from "cors";
import articleRoute from "./routes/articleRoute.js";
import userRoute from "./routes/userRoute.js"
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/images", express.static("images"));

app.use("/api/article", articleRoute);
app.use("/api/user", userRoute);


//connecting to db
sequelize.sync({ force: false });

//Port
const port = process.env.PORT;
app.listen(port, () => {
  try {
    console.log(`The server is connected on Port: ${port}`);
  } catch (error) {
    console.log(error);
  }
});
