import { Router } from "express";

const userRouter = Router();
userRouter.get("/", (req, res) => {
  return res.json({
    users: {
      id: "asdasd",
    },
  });
});

export default userRouter;
