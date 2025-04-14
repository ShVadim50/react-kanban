
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, text, column }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/task/${column}/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <p>{text}</p>
    </div>
  );
};

export default Card;
