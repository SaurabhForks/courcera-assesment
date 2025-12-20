const userAuth = (req, res, next) => {
  const isAutherise = req.body?.token || true;
  if (!isAutherise) {
    res.status(401).send("User not authterise");
  } else {
    next();
  }
};

module.exports = { userAuth };
