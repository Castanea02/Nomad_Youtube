import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

//express start
const app = express();
const logger = morgan("dev");
const PORT = 8080;

//morgan 함수를 이용한 요청로깅
app.use(logger);

//각 라우터 내용은 파일에서 확인
//"/"로 요청된다면 글로벌 라우터로 처리
app.use("/", globalRouter);
//"/videos"로 요청된다면 비디오 라우터로 처리
app.use("/videos", videoRouter);
//"/users로 요청된다면 유저 라우터로 처리"
app.use("/users", userRouter);

//Server ListenLogging
const handleListening = () => 
    console.log(`Server listening on ${PORT}`);
//Server Listen
app.listen(PORT, handleListening);