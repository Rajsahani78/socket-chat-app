const bcrypt = require("bcrypt");
const valiedatePassword = (userPassword, inputPassword) => {
    const isValid = bcrypt.compare(inputPassword, userPassword)
    return isValid
}
module.exports = valiedatePassword