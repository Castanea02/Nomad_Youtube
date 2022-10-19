import express from "express";
const PORT = 8080;

//express start
const app = express();
//Server ListenLogging
const handleListening = () => 
    console.log(`Server listening on port ahrhk2000.direct.quickconnect.to:${PORT}`);

//Middleware Function
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

//Request, Response Function
const RequestHome = (req, res, next) => {
    return res.send("<h1>Send Massage</h1>");
};

app.use(logger);
app.get("/", RequestHome);

//Server Listen
app.listen(PORT, handleListening);