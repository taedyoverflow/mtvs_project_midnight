const getConnection = require("../database/connection");
const LoginRepository = require("../repositories/login-repo");

exports.findUserByUserIdAndUserPassword = (loginDTO) => {
    return new Promise(async (resolve, reject) => {
        const connection = getConnection();
        const userId = loginDTO.userId;
        const userPassword = loginDTO.userPassword;
        
        const result = await LoginRepository.findUserByUserIdAndUserPassword(connection, userId, userPassword);
        connection.end();
        resolve(result);
    });
};
