import express from "express";
import {edit, remove} from "../controller/userController";//유저 컨트롤러의 함수 임포트

//User Router
const userRouter = express.Router(); //라우터 생성

userRouter.get("/edit", edit);//"/user/edit" 요청처리
userRouter.get("/delete", remove);//"/user/delete" 요청처리



export default userRouter;