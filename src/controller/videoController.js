//VideoController export
//요청시 반환
export const trending = (req, res) => {
    const videos = [
        {
            title:"First Video",
            rating:5,
            comment:2,
            createdAt:"2 minutes ago",
            views:59,
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
    res.render("home", {pageTitle : "Home", videos});
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("Delete Video");
}