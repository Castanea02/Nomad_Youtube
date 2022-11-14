import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

//express start
const app = express();
const logger = morgan("dev");
const PORT = 8080;

app.set("view engine", "pug"); //뷰엔진 퍼그 사용
app.set("views", process.cwd() + "/src/views"); //Pug 작업 디렉토리 변경


app.use(logger); //morgan 함수를 이용한 요청로깅
app.use(express.urlencoded({extended:true}));//express에서 form을 처리하기 위함

app.use("/", globalRouter); //"/"로 요청된다면 글로벌 라우터로 처리

app.use("/videos", videoRouter); //"/videos"로 요청된다면 비디오 라우터로 처리

app.use("/users", userRouter); //"/users로 요청된다면 유저 라우터로 처리"

//Server ListenLogging
const handleListening = () => 
    console.log(`Server listening on ${PORT}`);
    
//Server Listen
app.listen(PORT, handleListening);