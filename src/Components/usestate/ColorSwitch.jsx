import React, { useState } from "react";

export const ColorSwitch = () => {
  const [bgColor, setBgColor] = useState("");
  const color = (e) => setBgColor(e.target.value);
  return (
    <div className="max-w-sm rounded  shadow-lg border h-auto px-4 py-1 ">
      <select
        className="bg-transparent rounded-md border border-black"
        onChange={color}
      >
        <option value="">Choose color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        style={{ backgroundColor: bgColor, height: "100px", width: "100px" }}
      ></div>
    </div>
  );
};
