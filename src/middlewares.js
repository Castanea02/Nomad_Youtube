export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn); //locals는 pug에서 읽을수 있으므로 locals에 저장하여 pug에서 로드
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user || {};
  console.log(req.session.user);
  next();
};

export const protectorMiddleware = (req, res, next) => {
  //로그인된 사용자 접근제어
  if (req.session.loggedIn) {
    next();
  } else {
    return res.redirect("/login");
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  //이미 로그인 된 사용자 접근제어
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};
