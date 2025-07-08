import express from "express";
import doetnv from "dotenv";
import cors from "cors";
import songroutes from "./route.js";


doetnv.config();


const app = express();

app.use(cors());

app.use("/api/v1", songroutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});