import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

//express start
const app = express();
const logger = morgan("dev");
const PORT = 8080;

app.use(logger);
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

//Server ListenLogging
const handleListening = () => 
    console.log(`Server listening on port ahrhk2000.direct.quickconnect.to:${PORT}`);
//Server Listen
app.listen(PORT, handleListening);