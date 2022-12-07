//비디오 라우터
import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controller/videoController"; //비디오 컨트롤러의 함수 임포트
import { protectorMiddleware } from "../middlewares";

const videoRouter = express.Router(); //라우터 생성

videoRouter.get("/:id([0-9a-f]{24})", watch); //"/videos/param" 요청처리 <- digit(숫자) 정규식

videoRouter
  .route("/Upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(postUpload); //post시 postUpload

videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit); //post시 postEdit

videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);

export default videoRouter;
