import { useState } from "react";

export default function Name({ theName }) {
  const [isColor, setIsColor] = useState(false);
  return (
    <div>
      <p style={{ color: isColor ? "green" : "red" }}>{theName}</p>
      <button onClick={() => setIsColor(!isColor)}>change color</button>
    </div>
  );
}
