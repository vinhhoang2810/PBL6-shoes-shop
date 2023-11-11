const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Dữ liệu người dùng mẫu (để kiểm tra)
const users = [
  { username: "admin", password: "admin" },
  { username: "user", password: "user" },
];

app.post("/login.html", (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra tên người dùng và mật khẩu
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // Xác thực thành công: Trả về thông báo thành công dưới dạng JSON
    res.status(200).json({ message: "Đăng nhập thành công" });
  } else {
    // Xác thực thất bại: Trả về thông báo thất bại dưới dạng JSON
    res.status(401).json({ message: "Đăng nhập thất bại" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
