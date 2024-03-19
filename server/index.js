const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const tensorRoute = require("./routes/tensor");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.use(cors());
app.use(express.json());
app.use("/tensor", tensorRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
