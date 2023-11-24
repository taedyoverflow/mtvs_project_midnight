class LoginDTO {
    userId;
    userPassword;

    constructor(data) {
        this.userId = data.userId;
        this.userPassword = data.userPassword;
    }
    }

module.exports = LoginDTO;