const bcrypt = require("bcrypt");
const validatePasswowrd = (userPassword, inputPassword) => {
    const isValid = bcrypt.compare(inputPassword, userPassword)
    return isValid
}
module.exports = validatePasswowrd