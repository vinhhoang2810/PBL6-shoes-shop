class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5500/",
      timeout: 10000,
    });
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );
    this.instance.interceptors.response.use(
      (config) => config,
      (error) => Promise.reject(error)
    );
  }
  get(url) {
    return this.instance.get(url);
  }
  post(url, body) {
    return this.instance.post(url, body);
  }
}

const http = new Http();

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  axios
    .post("login", { username, password })
    .then((response) => {
      if (response.status === 200) {
        // Phản hồi hợp lệ, xử lý dữ liệu JSON ở đây
        const data = response.data;
        if (data.message === "Đăng nhập thành công") {
          // Xử lý khi đăng nhập thành công
          window.location.href = "index"; // Thay đổi đường dẫn thành trang home của bạn
        } else {
          // Xử lý khi đăng nhập thất bại
          console.error("Đăng nhập thất bại");
        }
      } else {
        // Xử lý khi có lỗi HTTP
        console.error("Lỗi HTTP:", response.status);
      }
    })
    .catch((error) => {
      console.error("Đã xảy ra lỗi:", error);
    });
});
