import mongoose from "mongoose";

//DB 명세
const videoSchema = new mongoose.Schema({
    title: {type:String, required:true, trim:true, maxLength:80},
    description: {type:String, required:true, trim:true, minLength:20},
    createdAt: {type:Date, required:true, default:Date.now}, //required:true 무조건 보내기(없을경우 에러 발생)
    hashtags: [{type:String, trim:true}],
    meta:{ 
        views:{type:Number, default:0, required:true},
        rating:{type:Number, default:0, required:true},
    },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;