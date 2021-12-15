import { useState } from "react";

export default function OneCounter({countNum}) {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>inc count{countNum}</button>
    </>
  );
}
