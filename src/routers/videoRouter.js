//비디오 라우터
import express from "express";
import {
    watch,
    getEdit,
    postEdit
} from "../controller/videoController"; //비디오 컨트롤러의 함수 임포트

const videoRouter = express.Router();//라우터 생성

videoRouter.get("/:id(\\d+)", watch);//"/videos/param" 요청처리 (\\d+) <- digit(숫자) 정규식
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);//post시 postEdit



export default videoRouter;