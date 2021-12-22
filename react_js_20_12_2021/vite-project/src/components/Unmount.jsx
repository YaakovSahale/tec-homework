import { useEffect } from "react";

const Unmount = () => {
  useEffect(() => () => console.log("unmount"), []);
  return <div>
      <h1>unmount component</h1>
  </div>;
};

export default Unmount;
