//VideoController export
//요청시 반환
const videos = [ //fake DB
    {
        title:"First Video",
        rating:5,
        comment:2,
        createdAt:"2 minutes ago",
        views:1,
        id:1,
    },
    {
        title:"Second Video",
        rating:4,
        comment:3,
        createdAt:"2 minutes ago",
        views:71,
        id:2,
    },
    {
        title:"Third Video",
        rating:3,
        comment:6,
        createdAt:"2 minutes ago",
        views:30,
        id:3,
    },
];

export const trending = (req, res) => { //메인페이지 로드 home.pug
    res.render("home", {pageTitle : "Home", videos});
};

export const watch = (req, res) => { //영상페이지 로드 watch.pug
    const id = req.params.id;
    const video = videos[id-1];
    
    return res.render("watch", {pageTitle:`Watch ${video.title}`, video});
}

export const getEdit = (req, res) => { //수정페이지 로드 edit.pug
    const id = req.params.id;
    const video = videos[id-1];

    res.render("edit", {pageTitle:`Editing: ${video.title}`, video});
}

export const postEdit = (req, res) => {//수정페이지 폼 POST edit.pug
    const id = req.params.id;
    const title = req.body.title;
    videos [id-1].title = title;

    return res.redirect(`/Videos/${id}`);
}