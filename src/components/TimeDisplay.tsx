import { useEffect, useState } from "react";
import { DATE_FORMAT_OPTIONS, LANG } from "../constants";

function TimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <div>
      <div>
        {new Intl.DateTimeFormat(LANG, DATE_FORMAT_OPTIONS).format(dateTime)}
      </div>
    </div>
  );
}

export default TimeDisplay;
