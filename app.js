const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// 라우터를 불러옴
const loginRouter = require("./src/routes/login-route");
// 라우터를 사용
app.use("/", loginRouter);

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
