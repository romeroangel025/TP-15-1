module.exports = (req, res, next) => {
    if (req.cookies.login) {
      req.session.user = req.cookies.login;
    }
    next();
  };