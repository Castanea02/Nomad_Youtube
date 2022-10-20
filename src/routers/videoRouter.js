import express from "express";
import {watch, edit} from "../controller/videoController"

//Video Router
const videoRouter = express.Router();


videoRouter.get("/edit", edit);
videoRouter.get("/watch", watch);

export default videoRouter;