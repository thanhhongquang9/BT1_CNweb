import React from 'react'
import './Profile.css';

function Profile({closeModal}){
  return <div className="modalBackground">
    <div className="modalContainer">
      <button className="closebtn" onClick={() => closeModal(false)}>X</button>
      <div className="title">
        <h3> MY PROFILE</h3>
      </div>
      <div className="headerbody">
        <p className="titleNameSchool">Trường Đại Học Sư Phạm TPHCM</p>
      </div>
      <div className="bodytitle">
        <p className="titleProfile">Hồng Quang Thành</p>
        <p className="titleProfile">MSSV: 4501104213</p>
        <p className="titleProfile">Lớp K45.CNTT.B</p>
        <p className="titleProfile">Khoa: Công Nghệ Thông Tin</p>
      </div>
      <div className="footer">
        <button className="btnCancel" onClick={() => closeModal(false)}>Cancel</button>
      </div>
    </div>
  </div>
}
export default Profile;