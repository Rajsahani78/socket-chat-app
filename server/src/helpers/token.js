const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET

const generateToken = (userData)=>{
    const token =  jwt.sign(userData, jwtSecret, {expiresIn: '15m'})
    return token
}

module.exports = {generateToken}