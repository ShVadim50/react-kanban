
import React, { useState } from "react";
import userImg from './images/user-menu.png'; 

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="user-menu" onClick={() => setOpen(!open)}>
      <img src={userImg} alt="User" />
      {open && (
        <ul className="dropdown">
          <li>Profile</li>   
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
