const httpStatus = require("http-status");
const loginService = require("../services/login-service");
const LoginDTO = require("../dto/login-dto");

exports.login = async (req, res, next) => {
    const loginDTO = new LoginDTO(req.body);

    try {
        console.log(loginDTO);
        const user = await loginService.findUserByUserIdAndUserPassword(loginDTO);
        if (user.length === 0) {
            // 로그인 실패 시
            res.status(httpStatus.UNAUTHORIZED).send({
                status: httpStatus.UNAUTHORIZED,
                message: "로그인 실패: 사용자 정보가 일치하지 않습니다.",
            });
        } else {
            // 로그인 성공 시
            res.status(httpStatus.OK).send({
                status: httpStatus.OK,
                message: "로그인 성공",
                user: {
                    id: user.userId,
                    password: user.userPassword
                    // 필요한 다른 사용자 정보도 추가할 수 있습니다.
                },
            });
        }
    } catch (error) {
        // 로그인 실패 시 (예외 발생 등)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: "로그인 실패: 서버 오류가 발생했습니다.",
        });
    }
};
