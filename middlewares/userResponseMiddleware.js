export function clearUserResponse(req, res, next) {
  const oldJson = res.json;

  res.json = function (data) {
    if (typeof data === "object") {
      if (data.password) {
        delete data.password;
      }
    }
    oldJson.call(this, data);
  };

  next();
}
