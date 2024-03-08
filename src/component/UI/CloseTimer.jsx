import { useEffect, useState } from "react";

const CloseTimer = ({ closeTime, isShow, closeMessage }) => {
  const [seconds, setSeconds] = useState(closeTime);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          isShow(false);
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="bg-indigo-500/50  px-4 py-2">
      {closeMessage} <p className="inline text-rose-600">{seconds}</p>
    </div>
  );
};

export default CloseTimer;
