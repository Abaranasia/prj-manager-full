
const jwt = require("jsonwebtoken");
const secretKey = "cosoloco";

const authenticate = (req, res) => {
    try {
        const {username, password} = req.body;

        if (!username || !password) {
          return res.status(400).json({ message: "Username and password are required" });
        }
        if (username === "admin" && password === "123") {
          const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
          return res.status(200).json({ token });
        } else {
          return res.status(401).json({ message: "Authentication failed" });
        }
      } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
      }
  }

  module.exports = {
    authenticate
  };