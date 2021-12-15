import { useState } from "react";

export default function YourName() {
  const [isColor, setIsColor] = useState(false);
  return (
    <div>
      <p style={{ color: isColor ? "green" : "red" }}>yaakov</p>
      <button onClick={() => setIsColor(!isColor)}>change color</button>
    </div>
  );
}

