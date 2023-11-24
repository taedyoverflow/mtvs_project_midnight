exports.findUserByUserIdAndUserPassword = () => {
    return `
    SELECT * FROM users WHERE userId = ? AND userPassword = ?;
    `;
};