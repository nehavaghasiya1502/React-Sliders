import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Rc10 = () => {
  const [value, setValue] = useState(30);

  return (
      <div style={{marginTop: "100px"}}>
      <h2>10. RC Slider</h2>
     <div style={{ width: "60%", margin: "20px auto" }}>
      <Slider
        min={0}
        max={100}
        value={value}
        onChange={(val) => setValue(val)}
      />

      <p>Value: {value}</p>
    </div>
    </div>
  );
};

export default Rc10;
