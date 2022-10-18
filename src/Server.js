import express from "express";

const PORT = 8080;

//express start
const app = express();

//Request Function
const Req = () => 
    console.log("Somebody is Request /");

//Request
app.get("/", Req);






const handleListening = () => 
    console.log(`Server listening on port ahrhk2000.direct.quickconnect.to:${PORT}`);

//Server Listen
app.listen(PORT, handleListening);