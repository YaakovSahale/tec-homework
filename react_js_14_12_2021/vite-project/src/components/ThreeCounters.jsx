import OneCounter from "./OneCounter";
export default function ThreeCounters() {
  return (
    <div>
      <OneCounter countNum={1} />
      <OneCounter countNum={2} />
      <OneCounter countNum={3} />
    </div>
  );
}

// import { useState } from "react";

// export default function ThreeCounters() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);
//   return (
//     <div>
//       <p>{count1}</p>
//       <button onClick={() => setCount1(count1 + 1)}>inc count1</button>
//       <p>{count2}</p>
//       <button onClick={() => setCount2(count2 + 1)}>inc count2</button>
//       <p>{count3}</p>
//       <button onClick={() => setCount3(count3 + 1)}>inc count3</button>
//     </div>
//   );
// }
