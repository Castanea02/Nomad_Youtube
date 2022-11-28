import "dotenv/config"; //use dotenv
import "./db"; //DB연결
import "./models/Video";
import "./models/User"
import app from "./Server";


const PORT = 8080;

//Server ListenLogging
const handleListening = () => 
    console.log(`Server listening on ${PORT}`);

//Server Listen
app.listen(PORT, handleListening);