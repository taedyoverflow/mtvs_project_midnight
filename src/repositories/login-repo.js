const loginQuery = require("../database/login-query");

exports.findUserByUserIdAndUserPassword = (connection, userId, userPassword) => {
    return new Promise((resolve, reject) => {
        connection.query(loginQuery.findUserByUserIdAndUserPassword(),[userId,userPassword] ,(err, result) => {
            if (err) {
                reject(err);
            }
        resolve(result);
        });
    });
};