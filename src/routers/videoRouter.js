//비디오 라우터
import express from "express";
import {
    watch,
    getEdit,
    postEdit,
    getUpload,
    postUpload
} from "../controller/videoController"; //비디오 컨트롤러의 함수 임포트

const videoRouter = express.Router();//라우터 생성

videoRouter.route("/Upload").get(getUpload).post(postUpload);//post시 postUpload
videoRouter.get("/:id([0-9a-f]{24})", watch);//"/videos/param" 요청처리 <- digit(숫자) 정규식
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);//post시 postEdit

export default videoRouter;