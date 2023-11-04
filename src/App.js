import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [counter, setCounter] = useState(0);

  const decreaseHandler = () => {
    setCounter(counter - 1);
  };

  const increaseHandler = () => {
    setCounter(counter + 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#166fdc] flex-col gap-10">
      <div className="text-[#000000] font-medium text-2xl">
        Increment && Decrement
      </div>
      <div className="bg-white  flex justify-center gap-12 py-3 rounded-lg text-[25px] text-[#344151]">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          
          <FontAwesomeIcon icon="fa-solid fa-square-minus" className=""/>-
        </button>

        <div className="font-bold gap-12 text-5xl">{counter}</div>

        <button
          onClick={increaseHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>
      <button
        onClick={resetHandler}
        className="bg-[#000202] text-white px-5 py-2 text-lg capitalize w-40 rounded-3xl"
      >
        reset
      </button>
    </div>
  );
}

export default App;
