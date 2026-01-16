import { useEffect, useMemo, useState } from "react";
import { DATE_FORMAT_OPTIONS, LANG } from "../constants";

interface TimeDisplayProps {
  tickMs?: number;
}

function TimeDisplay({ tickMs = 1000 }: TimeDisplayProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, tickMs);

    return () => clearInterval(id);
  }, [tickMs]);

  const formatter = useMemo(
    () => new Intl.DateTimeFormat(LANG, DATE_FORMAT_OPTIONS),
    []
  );

  return <time dateTime={now.toISOString()}>{formatter.format(now)}</time>;
}

export default TimeDisplay;
