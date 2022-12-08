import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB!");
const handleError = (error) => console.log("❌ DB error", error);

db.on("error", handleError); //on은 여러번 가능 once 한번만
db.once("open", handleOpen);
