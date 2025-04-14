import React, { useState } from "react";

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="user-menu" onClick={() => setOpen(!open)}>
      <img src="./images/user-menu.png" alt="User" />
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