//글로벌 라우터
import express from "express";
import {getJoin, postJoin, login} from "../controller/userController";
import {home, search} from "../controller/videoController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);

export default rootRouter;