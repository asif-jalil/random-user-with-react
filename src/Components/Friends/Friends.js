import React, { useState } from "react";
import FriendList from "../FriendList/FriendList";
import "./Friends.css";

const Friends = (props) => {
  const friends = props.friendList;
  // const [friends, setFriends] = useState([]);

  let totalSalary = 0;
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    let salary = Number(friend.salary.slice(1));
    totalSalary = totalSalary + salary;
  }

  const formatNumber = (data) => {
    let parseData = Number(data);
    return parseData.toFixed(2);
  };

  return (
    <div className="friends">
      <div className="header">
        <h2>Friend Zone</h2>
        <h5>Your have only {friends.length} friends</h5>
        <p>Your friends salary: ${formatNumber(totalSalary)}</p>
      </div>
      <div className="friend-list">{friends.map((friend) => <FriendList friend={friend} key={friend.id}></FriendList>).reverse()}</div>
    </div>
  );
};

export default Friends;
