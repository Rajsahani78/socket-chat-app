const bcrypt = require("bcrypt");

const generatePassword = async(userPassword)=>{
    const salt = await bcrypt.genSalt(10)
    const password  =await bcrypt.hash(userPassword, salt)
    return password
}

module.exports = {generatePassword}