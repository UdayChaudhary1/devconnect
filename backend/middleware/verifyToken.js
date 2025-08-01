import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  console.log("HERE");
  const token = req.cookies.token;
  console.log("HERE");
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  }
};
