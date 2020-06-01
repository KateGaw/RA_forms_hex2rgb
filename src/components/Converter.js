import React from "react";

const Converter = () => {
  let value;
  const [rgb, setRgb] = React.useState();
  const [color, setColor] = React.useState();

  const hexToRGB = (hex) => {
    hex = hex.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const updateInput = (event) => {
    const regexp = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;
    if (event.target.value.match(regexp)) {
      if (event.target.value.length === 7) {
        const output = hexToRGB(event.target.value);
        setRgb(output);
        setColor(output);
      }
    } else {
      if (event.target.value.length > 7 || event.target.value.length === 7) {
        setRgb("Error!");
        setColor("rgb(205, 92, 92)");
      } else {
        setRgb("");
        setColor("");
      }
    }
  };

  return (
    <div className="form" style={{ backgroundColor: color }}>
      <div className="control">
        <input
          className="input"
          type="text"
          onChange={updateInput}
          value={value}
        />
        <p className="output">{rgb}</p>
      </div>
    </div>
  );
};

export default Converter;
