import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Button";
import "./style.scss";

export default function ProfileCard() {
  const image =
    "https://png.pngtree.com/element_our/20200611/ourlarge/pngtree-doggie-cute-cheap-expression-pack-avatar-image_2251655.jpg";

  // personal
  const [name, setName] = useState("Nguyễn Hoàng Mỹ");
  const [age, setAge] = useState("21");
  const [address, setAddress] = useState("Lien Chieu - Da Nang");
  const [email, setEmail] = useState("n.h.my2002@gmail.com");
  const [phonenumber, setPhonenumber] = useState("0985048769");
  const [gender, setGender] = useState("nam");
  const [birthDate, setBirthDate] = useState("2002-09-18");
  const [isEditing, setIsEditing] = useState(false);

  // change pass
  const [username, setUsername] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [passwordconfim, setPasswordconfim] = useState("");

  // show 1 trong 2
  const [showPersonal, setShowPersonal] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPersonal = () => {
    setShowPersonal(true);
    setShowChangePassword(false);
  };
  const handleShowChangePassword = () => {
    setShowPersonal(false);
    setShowChangePassword(true);
  };
  const handleLogout = () => {
    toast.success("Đăng xuất thành công");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhonenumber = (e) => {
    setPhonenumber(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleSave = () => {
    setIsEditing(!isEditing);
    toast.success("Thay đổi thông tin cá nhân thành công");
  };
  const handleChangePassword = () => {
    if (newpassword === passwordconfim) {
      // Thực hiện các bước thay đổi mật khẩu ở đây
      toast.success("Thay đổi mật khẩu thành công");
      setTimeout(() => {
        setUsername("");
        setNewpassword("");
        setPasswordconfim("");
      }, 2000);
    } else {
      // Hiển thị thông báo hoặc xử lý khi mật khẩu không khớp
      toast.error("Sai tài khoản hoặc mật khẩu");
    }
  };
  const handleCancel = () => {
    setUsername("");
    setNewpassword("");
    setPasswordconfim("");
  };
  return (
    <section>
      <div className="profile container-layout">
        <h1 className="profile-title">Profile information</h1>
        <div className="profile-content">
          <div className="profile-info">
            <img src={image} alt="" className="profile-img"></img>
            <div className="profile-accout">
              <span>Nguyễn Hoàng Mỹ</span>
            </div>
          </div>
          <div className="profile-detail">
            <div className="profile-btn">
              <button
                className="profile-btn-personal"
                onClick={handleShowPersonal}
              >
                Personal Information
              </button>
              <button
                className="profile-btn-changepassword"
                onClick={handleShowChangePassword}
              >
                Change Password
              </button>
              <button className="profile-btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
            <div className={showPersonal ? "profile-show-personal" : "hidden"}>
              <div className="profile-name">
                <label className="profile-show-label">Họ và tên</label>
                <input
                  type="text"
                  value={name}
                  onChange={handleName}
                  className="profile-show-input"
                ></input>
              </div>
              <div className="profile-age">
                <label className="profile-show-label">Tuổi</label>
                <input
                  type="number"
                  value={age}
                  onChange={handleAge}
                  className="profile-show-input"
                ></input>
              </div>
              <div className="profile-address">
                <label className="profile-show-label">Địa chỉ</label>
                <input
                  type="text"
                  value={address}
                  onChange={handleAddress}
                  className="profile-show-input"
                ></input>
              </div>
              <div className="profile-email">
                <label className="profile-show-label">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  className="profile-show-input"
                ></input>
              </div>
              <div className="profile-phone">
                <label className="profile-show-label">Số điện thoại</label>
                <input
                  type="text"
                  value={phonenumber}
                  onChange={handlePhonenumber}
                  className="profile-show-input"
                ></input>
              </div>
              <div className="profile-sex">
                <label className="profile-show-label">Giới tính</label>
                <input
                  type="radio"
                  value="nam"
                  checked={gender === "nam"}
                  onChange={handleGenderChange}
                />
                <label>Nam</label>

                <input
                  type="radio"
                  value="nu"
                  checked={gender === "nu"}
                  onChange={handleGenderChange}
                />
                <label>Nữ</label>

                <input
                  type="radio"
                  value="khac"
                  checked={gender === "khac"}
                  onChange={handleGenderChange}
                />
                <label>Khác</label>
              </div>
              <div className="profile-date">
                <label className="profile-show-label">Ngày Sinh</label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={handleDateChange}
                />
              </div>

              <div className="profile-btn-update">
                {/* Use the isEditing state to conditionally render "Chỉnh sửa" or "Lưu" button */}
                {isEditing ? (
                  <Button text="Lưu" onClick={handleSave} />
                ) : (
                  <Button text="Chỉnh sửa" onClick={handleEdit} />
                )}
              </div>
            </div>
            <div
              className={
                showChangePassword ? "profile-show-changepassword" : "hidden"
              }
            >
              <div className="profile-username">
                <label className="profile-show-label">Username</label>
                <input
                  type="text"
                  className="profile-show-input"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                ></input>
              </div>
              <div className="profile-password">
                <label className="profile-show-label">New Password</label>
                <input
                  type="password"
                  className="profile-show-input"
                  value={newpassword}
                  onChange={(event) => setNewpassword(event.target.value)}
                ></input>
              </div>
              <div className="profile-passwordconfim">
                <label className="profile-show-label">Confim Password</label>
                <input
                  type="password"
                  className="profile-show-input"
                  value={passwordconfim}
                  onChange={(event) => setPasswordconfim(event.target.value)}
                ></input>
              </div>
              <div className="profile-btn-change">
                <Button
                  type="submit"
                  text="Thay đổi mật khẩu"
                  className="profile-btn-submit"
                  onClick={handleChangePassword}
                ></Button>
                <Button
                  type="submit"
                  text="Hủy bỏ"
                  className="profile-btn-cancel"
                  onClick={handleCancel}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
