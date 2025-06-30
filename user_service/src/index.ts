import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});