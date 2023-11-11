import React from "react";
import { Link } from "react-router-dom";

export default function ForgetPassPage() {
  return (
    <div className="login-control body-login">
      <div className="wrapper">
        <div className="form-box login">
          <h1>Forget Password</h1>
          <form action="#">
            <div className="input-box">
              <input type="text" required />
              <label>Username or Number Phone</label>
            </div>
            <div className="input-box">
              <input type="password" required />
              <label>New Password</label>
            </div>
            <div className="input-box">
              <input type="password" required />
              <label>Confirm Password</label>
            </div>
            <button type="submit" className="btn">
              RESET PASSWORD
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
