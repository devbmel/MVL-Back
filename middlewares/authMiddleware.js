import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.JWT_SECRET;

async function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json("Authentification failed");

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await userService.getUserByid(decoded.id);
    if (!user) {
      return res.status(401).json("Authentification failed");
    }
    req.user = user;
    next();
  } catch (error) {
    console.error(err);
    return res.status(401).json("authentication failed");
  }
}

export default authenticateToken;
