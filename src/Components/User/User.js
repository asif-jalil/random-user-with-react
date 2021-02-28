import { useState } from "react";
import "./User.css";

const User = (props) => {
  const user = props.user;
  const { name, image, email, phone, location, salary, job } = user;
  const [btnLabel, setBtnLabel] = useState("Add Friend");
  const handleBtn = () => {
    if (btnLabel === "Add Friend") {
      setBtnLabel("Remove Friend");
    } else {
      setBtnLabel("Add Friend");
    }
  };
  return (
    <div className="card">
      <div className="cardheader"></div>
      <div className="avatar">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <div className="title">{name}</div>
        <div className="desc">{email}</div>
        <div className="desc">{phone}</div>
        <div className="desc">From {location}</div>
      </div>
      <div className="footer">
        <p>
          <span>{salary}</span>/hour
        </p>
        <span className="divider"></span>
        <p>Work as {job}</p>
      </div>
      <div style={{ padding: 5 }}>
        <button
          onClick={() => {
            props.handleAddFriend(user);
            handleBtn();
          }}
          className="btn-full"
        >
          {btnLabel}
        </button>
      </div>
    </div>
  );
};

export default User;
