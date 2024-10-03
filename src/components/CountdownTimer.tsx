import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const HandleStart = () => {
    if (time > 0) {
      setRemainingTime(time);
      setIsRunning(true);
    }
  };

  const HandlePause = () => {
    setIsRunning(false);
  };
  const HandleReset = () => {
    setIsRunning(false);
    setRemainingTime(0);
    setTime(0);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-80% via-sky-500 via-100% "> 
    {/* bg-gradient-to-br from-black to-grey"> */}
      <h1 className="text-5xl font-bold uppercase mb-6 text-white italic underline">***COUNT DOWN TIMER***</h1>
      <input type="number"
      className="border-2 border-grey-400 bg-transparent p-3 mb-6 text-white 
      text-xl rounded"
      placeholder="Enter Time in Seconds..."
      value={time >0 ? time:""}
      onChange={(e)=>setTime(Number(e.target.value))}
      />

      <div className="text-3xl font-semibold upperclass mb-6 text-white">
        {remainingTime} Seconds remaining...
      </div>
      <div className="flex spacing-x-6">
      <button onClick={HandleStart}
      className="text-2xl text-white font-bold uppercase mx-6 px-8 py-4 rounded-lg font-normal
      bg-gradient-to-r from-violet-500 to-teal-500 hover:from-violet-600 hover:to-teal-600">
        
        START
      </button>
      <button  onClick={HandlePause}
      className=" text-2xl text-white text-white font-bold uppercase mx-6 px-8 py-4 rounded-lg font-normal
      bg-gradient-to-r from-violet-500 to-teal-500 hover:from-violet-600 hover:to-teal-600">
      PAUSE
      </button>

      <button  onClick={HandleReset}
      className="text-2xl text-white text-white font-bold uppercase mx-6 px-8 py-4 rounded-lg font-normal
      bg-gradient-to-r from-violet-500 to-teal-500 hover:from-violet-600 hover:to-teal-600">
      RESET
      </button>
      </div>
    </div>
  );
};
export default CountdownTimer