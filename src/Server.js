import express from "express";
import morgan from "morgan";
const PORT = 8080;

//express start
const app = express();
const logger = morgan("dev");

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("HOME");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

app.use(logger);
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

//Server ListenLogging
const handleListening = () => 
    console.log(`Server listening on port ahrhk2000.direct.quickconnect.to:${PORT}`);
//Server Listen
app.listen(PORT, handleListening);