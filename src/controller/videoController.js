import Video from "../models/Video"; //Using DB
const requestIp = require('request-ip');


export const home = async(req, res) => { //메인페이지 로드 home.pug
    console.log("Client IP : " + requestIp.getClientIp(req)); //IP Logging
    
    const videos = await Video.find({}); //await, async (promise) 비디오 불러오기

    return res.render("home", {pageTitle:"Home", videos});
};


export const watch = async (req, res) => { //영상페이지 로드 watch.pug
    const id = req.params.id;
    const video = await Video.findById(id);

    return res.render("watch", {pageTitle:video.title, video});
};


export const getEdit = (req, res) => { //수정페이지 로드 edit.pug
    const id = req.params.id;
    res.render("edit", { pageTitle:`Editing` });
};


export const postEdit = (req, res) => {//수정페이지 폼 POST edit.pug
    const id = req.params.id;
    const title = req.body.title;

    return res.redirect(`/Videos/${id}`);
};


export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle:"Upload Video"});
};


export const postUpload = async (req, res) => {//비디오 업로드 POST
    const {title, description, hashtags} = req.body; //form 내용 받아오기
    try{//예외처리
        await Video.create({ //form내용 DB저장
            title:title,
            description:description,
            //createdAt:date.now(), << set default date
            hashtags:hashtags.split(",").map((word) => `#${word}`),
        }); //form 저장
        return res.redirect("/");
    }catch (error){//에러 발생시
        return res.render("upload",{ pageTitle:"Upload Video", errorMessage:error._message });
    }
};