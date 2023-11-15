// import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./style.scss";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstAndLastName, setFirstAndLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const naviagte = useNavigate();

  const handleSubmit = async () => {
    // if (username === "admin" && password === "admin") {
    //   toast.success("Đăng nhập thành công");
    //   setTimeout(() => {
    //     naviagte("/register");
    //   }, 2000);
    // } else {
    //   toast.error("Sai tài khoản hoặc mật khẩu");
    // }
    if (!username || !password || !firstAndLastName || !phone || !email) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      const formData = {
        username,
        password,
        firstAndLastName,
        phone,
        email,
      };
      //   const response = await axios.post(
      //     "https://nthdv-pbl6.up.railway.app/api/user/login",
      //     formData
      //   );
      //   if (response) {
      toast.success("Đăng ký thành công");
      localStorage.setItem("user1", JSON.stringify(formData));

      setTimeout(() => {
        naviagte("/login");
      }, 2000);
    } catch (error) {
      // }
      toast.error(error?.message);
    }
  };

  return (
    <div className="register-control body-register">
      <ToastContainer />
      <div className="wrapper-register">
        <div className="form-box register">
          <h2>Register</h2>
          <form>
            <div className="input-register">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <label>Username</label>
            </div>
            <div className="input-register">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <label>Password</label>
            </div>
            <div className="input-register">
              <input
                type="text"
                id="firstAndLastName"
                name="firstAndLastName"
                value={firstAndLastName}
                onChange={(event) => setFirstAndLastName(event.target.value)}
                required
              />
              <label>First and last name</label>
            </div>

            <div className="input-register">
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
              <label>Phone Number</label>
            </div>
            <div className="input-register">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-register">
              <select className="permission">
                <option value="0">Sell</option>
                <option value="1">Purchase</option>
              </select>
            </div>
            <button
              className="btn-register"
              type="button"
              onClick={handleSubmit}
              id="btn-login"
            >
              REGISTER
            </button>
            <div className="login-register">
              <p>
                If you already have an Account?
                <Link to="/login" className="login-link">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
