//비디오 라우터
import express from "express";
import {upload, edit, see, deleteVideo} from "../controller/videoController"; //비디오 컨트롤러의 함수 임포트

const videoRouter = express.Router();//라우터 생성

videoRouter.get("/upload", upload);//"/videos/edit" 요청처리
videoRouter.get("/:id", see);//"/videos/param" 요청처리
videoRouter.get("/:id/edit", edit);//"/videos/edit" 요청처리
videoRouter.get("/:id/delete", deleteVideo);//"/videos/edit" 요청처리


export default videoRouter;