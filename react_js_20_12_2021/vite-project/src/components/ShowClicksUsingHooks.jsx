import { useEffect, useState } from "react";

const ShowClicksUsingHooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => (document.title = count),[count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

export default ShowClicksUsingHooks;
