import React, { useEffect, useState } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default IntervalHookCounter;
