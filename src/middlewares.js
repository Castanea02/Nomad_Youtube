export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn); //locals는 pug에서 읽을수 있으므로 locals에 저장하여 pug에서 로드
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user;

    next();
};