import { useState, useEffect } from 'react';
import './index.css';

function StartButton({ value, onClicking }) {
  return (
    <button
      className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md 
                 hover:bg-blue-700 transition duration-300"
      onClick={onClicking}
    >
      {value}
    </button>
  );
}

function App() {  
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Function to start the timer
  function startTimer() {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setSec((prevSec) => {
          if (prevSec >= 59) {
            setMin((prevMin) => prevMin + 1);
            return 0; // Reset seconds
          } else {
            return prevSec + 1;
          }
        });
      }, 1000); // Run every second

      setIntervalId(id); // Save the interval ID to clear later
    }
  }

  // Function to stop the timer
  function stopTimer() {
    clearInterval(intervalId);
    setIsRunning(false);
  }

  // Function to reset the timer
  function resetTimer() {
    clearInterval(intervalId);
    setSec(0);
    setMin(0);
    setIsRunning(false);
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-6"> 
        
        {/* Timer Display */}
        <h1 className="w-32 h-32 bg-amber-100 text-6xl flex items-center justify-center 
                      rounded-lg shadow-lg font-mono">
          {min}:{sec < 10 ? `0${sec}` : sec} {/* Adds leading zero for seconds */}
        </h1>
        
        {/* Buttons Row */}
        <div className="flex gap-4">
          <StartButton value="Start" onClicking={startTimer} />
          <StartButton value="Stop" onClicking={stopTimer} />
          <StartButton value="Reset" onClicking={resetTimer} />
        </div>
        
      </div>
    </>
  );
}


export default App
