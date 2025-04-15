import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, text, column, avatar }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/task/${column}/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-header">
        <img src={avatar} alt="Avatar" className="avatar" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
