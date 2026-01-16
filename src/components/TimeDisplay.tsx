import { useEffect, useState } from "react";

function TimeDisplay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <div>
      <div>{time.toLocaleTimeString()}</div>
    </div>
  );
}

export default TimeDisplay;
