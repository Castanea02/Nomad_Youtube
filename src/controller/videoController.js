//VideoController export
const requestIp = require('request-ip');
//요청시 반환

import Video from "../models/Video"; //Using DB

//Video.find({}, (error, videos) => {});


export const home = async(req, res) => { //메인페이지 로드 home.pug
    console.log("Client IP : " + requestIp.getClientIp(req)); //IP Logging

    const videos = await Video.find({}); //await, async (promise)
    return res.render("home", {pageTitle:"Home", videos});
};

export const watch = (req, res) => { //영상페이지 로드 watch.pug
    const id = req.params.id;
    return res.render("watch", {pageTitle:`Watching`});
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

export const postUpload = (req, res) => {

    return res.redirect("/");
}