import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //   const getItems = () => {
  //     return [number, number + 1, number + 2];
  //   };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={(e) => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>

      <Child getItems={getItems} />
    </div>
  );
};

export default Parent;
