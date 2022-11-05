//VideoController export
//요청시 반환
export const trending = (req, res) => res.render("home");

export const see = (req, res) => res.render("watch");

export const edit = (req, res) => {
    console.log(req.params);
    return res.send("Edit Video");
}

export const search = (req, res) => res.send("Search");

export const upload = (req, res) => res.send("Upload Video");

export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("Delete Video");
}