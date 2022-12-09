import Video from "../models/Video"; //Using DB
import User from "../models/User";
const requestIp = require("request-ip");

export const home = async (req, res) => {
  //메인페이지 로드 home.pug
  console.log("Client IP : " + requestIp.getClientIp(req)); //IP Logging
  const videos = await Video.find({}).sort({ createdAt: "asc" }); //await, async (promise) 비디오 불러오기

  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = async (req, res) => {
  //영상페이지 로드 watch.pug
  const id = req.params.id;
  const video = await Video.findById(id).populate("owner"); //User 데이터 Relationship
  console.log(video);
  if (!video) {
    return res.render("404", { pageTitle: `Video Not Found` });
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  //수정페이지 로드 edit.pug
  const id = req.params.id;
  const {
    user: { _id },
  } = req.session;
  const video = await Video.findById(id);

  if (!video) {
    return res.render("404", { pageTitle: `Video Not Found` });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }

  return res.render("edit", { pageTitle: `Edit : ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  //수정페이지 폼 POST edit.pug
  const { id } = req.params;
  const {
    user: { _id },
  } = req.session;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id }); //true or false
  if (!video) {
    //error check
    return res.status(404).render("404", { pageTitle: `Video Not Found` });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  await Video.findByIdAndUpdate(id, {
    //Update form
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/Videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  //비디오 업로드 POST
  const {
    user: { _id },
  } = req.session;
  const { path: fileUrl } = req.file;
  const { title, description, hashtags } = req.body; //form 내용 받아오기
  try {
    //예외처리
    const newVideo = await Video.create({
      //form내용 DB저장
      title,
      fileUrl,
      description,
      owner: _id,
      //createdAt:date.now(), << set default date
      hashtags: Video.formatHashtags(hashtags),
    }); //form 저장
    const user = await User.findById(_id);
    user.videos.push(newVideo._id);
    user.save();
    return res.redirect("/");
  } catch (error) {
    //에러 발생시
    return res.status(400).render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  const {
    user: { _id },
  } = req.session;

  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: `Video Not Found` });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  await Video.findByIdAndDelete(id);

  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query; //Get Param
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i"), //정규 표현식 keyword를 포함한
      },
    });
  }
  return res.render("search", { pageTitle: "Search", videos });
};
