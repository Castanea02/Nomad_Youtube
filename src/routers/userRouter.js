//유저 라우터
import express from "express";
import {
    getEdit,
    postEdit, 
    logout, 
    see, 
    startGithubLogin, 
    finishGithubLogin,
} from "../controller/userController";//유저 컨트롤러의 함수 임포트

const userRouter = express.Router();//라우터 생성

userRouter.route("/edit").get(getEdit).post(postEdit);//"/user/edit" 요청처리
userRouter.get("/logout", logout);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);

userRouter.get(":id", see);


export default userRouter;