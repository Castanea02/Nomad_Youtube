import express from "express";

//express start
const app = express();

const handleListening = () => console.log("Server listening on port 4000");

app.listen(8080, handleListening);