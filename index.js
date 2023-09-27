import express from "express";
import userRouter from "./routers/userRouter.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hellow world");
});

app.use("/users", userRouter);

app.listen(3000, () => console.log("server running"));
