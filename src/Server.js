import express from "express";
import morgan from "morgan";
import session from "express-session"; //session
import MongoStore from "connect-mongo"; //session mongostore
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

//express start
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug"); //뷰엔진 퍼그 사용
app.set("views", process.cwd() + "/src/views"); //Pug 작업 디렉토리 변경
app.get("/robots.txt", (req, res) => {
  //robots.txt 생성
  res.type("text/plain");
  res.send("User-agent:*\nDisallow:/");
}); //robots.txt 추가

app.use(logger); //morgan 함수를 이용한 요청로깅

app.use(express.urlencoded({ extended: true })); //express에서 form을 처리하기 위함

app.use(
  session({
    //session을 위함
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false, //session 수정을 기준으로 저장 => 로그인 사용자에게만 session 주기
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }), //session mongostore
  })
);

app.use(localsMiddleware);

app.use("/", rootRouter); //"/"로 요청된다면 root 라우터로 처리
app.use("/videos", videoRouter); //"/videos"로 요청된다면 비디오 라우터로 처리
app.use("/users", userRouter); //"/users로 요청된다면 유저 라우터로 처리"

export default app;
