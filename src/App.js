import "./App.css";
import User from "./Components/User/User";
import fakeData from "./fakeData/data.json";
import { useState } from "react";
import Friends from "./Components/Friends/Friends";

function App() {
  const [users, setUsers] = useState(fakeData);
  const [friendList, setFriendList] = useState([]);

  const handleAddFriend = (user) => {
    let isUserExist = friendList.indexOf(user);
    if (isUserExist === -1) {
      let newFriendList = [...friendList, user];
      setFriendList(newFriendList);
    } else {
      let newFriendList = friendList.filter((fd) => fd !== user);
      setFriendList(newFriendList);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="total-user">
          {users.map((user) => (
            <User user={user} handleAddFriend={handleAddFriend} key={user.id}></User>
          ))}
        </div>
        <div className="selected-user">
          <Friends friendList={friendList}></Friends>
        </div>
      </div>
    </div>
  );
}

export default App;
