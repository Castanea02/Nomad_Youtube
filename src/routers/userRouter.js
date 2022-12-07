//유저 라우터
import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
} from "../controller/userController"; //유저 컨트롤러의 함수 임포트
import { protectorMiddleware } from "../middlewares";
import { publicOnlyMiddleware } from "./../middlewares";

const userRouter = express.Router(); //라우터 생성

userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit); //all > get 또는 Post 상관않고 모두 middleware 적용
userRouter.get("/logout", protectorMiddleware, logout);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);

userRouter.get(":id", see);

export default userRouter;
