import Slider from "@mui/material/Slider";
import { useState } from "react";

function valuetext(value) {
  return `${value}°C`;
}

const SliderTest = ({ minDistance }) => {
  const [value2, setValue2] = useState([20, 50]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <Slider
      getAriaLabel={() => "Minimum distance shift"}
      value={value2}
      onChange={handleChange2}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      disableSwap
    />
  );
};

export default SliderTest;
