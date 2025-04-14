
import React from "react";

const DropdownAdd = ({ options, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
      <option value="" disabled>Select task</option>
      {options.map((task) => (
        <option key={task.id} value={task.id}>
          {task.text}
        </option>
      ))}
    </select>
  );
};

export default DropdownAdd;
