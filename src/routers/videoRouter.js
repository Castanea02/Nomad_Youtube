//비디오 라우터
import express from "express";
import {upload, edit, see, deleteVideo} from "../controller/videoController"; //비디오 컨트롤러의 함수 임포트

const videoRouter = express.Router();//라우터 생성

videoRouter.get("/upload", upload);//"/videos/upload" 요청처리
videoRouter.get("/:id(\\d+)", see);//"/videos/param" 요청처리 (\\d+) <- digit 정규식
videoRouter.get("/:id(\\d+)/edit", edit);//"/videos/edit" 요청처리
videoRouter.get("/:id(\\d+)/delete", deleteVideo);//"/videos/deleteVideo" 요청처리


export default videoRouter;