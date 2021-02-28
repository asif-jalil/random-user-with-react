import React from "react";
import "./FriendList.css";

const FriendList = (props) => {
  const friend = props.friend;
  const { name, image, email, phone, location } = friend;
  return (
    <div className="selected-card">
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
    </div>
  );
};

export default FriendList;
