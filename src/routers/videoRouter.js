//비디오 라우터
import express from "express";
import {watch, edit} from "../controller/videoController"; //비디오 컨트롤러의 함수 임포트

const videoRouter = express.Router();//라우터 생성

videoRouter.get("/edit", edit);//"/videos/edit" 요청처리
videoRouter.get("/watch", watch);//"/videos/watch" 요청처리

export default videoRouter;