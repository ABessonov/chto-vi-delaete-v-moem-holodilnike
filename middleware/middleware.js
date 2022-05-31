const checkSession = (req, res, next) => {
  if (req.session.userId) {
    res.locals.user = {
      name: req.session.userName,
      id: req.session.userId,
      role_id: req.session.role_id,
    };
    return next();
  }
  next();
};

module.exports = {
  checkSession,
};
