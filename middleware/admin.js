const config = require("config");

module.exports = function (req, res, next) {
  // 401 Unauthorized
  // 403 Forbidden
  if (!config.get("requiresAuth")) return next();
  console.log(req.user.isAdmin);
  if (!req.user.isAdmin) return res.status(403).send("Access denied.");

  next();
};
