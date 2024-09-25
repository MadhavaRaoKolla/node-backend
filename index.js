const express = require("express");
const userRouter = require("./routes/user");
const middleware = require("./middleware");
const { connectMongoDB } = require("./connection");

const app = express();
const PORT = 3000;

connectMongoDB("mongodb://127.0.0.1:27017/firstbackend")
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("Mongoose not connected...", err));

//Middleware - plugin
app.use(express.urlencoded({ extended: false }));
app.use(middleware);

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
