import React, { useEffect, useMemo, useRef, useState } from "react";
import useTyping from "react-typing-game-hook";

const TypingThroughInput = ({ text }) => {
  const [duration, setDuration] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const letterElements = useRef();

  const {
    states: {
      charsState,
      currIndex,
      phase,
      correctChar,
      errorChar,
      startTime,
      endTime,
    },
    actions: { insertTyping, deleteTyping, resetTyping },
  } = useTyping(text, { skipCurrentWordOnSpace: false, pauseOnError: true });

  // set cursor
  const pos = useMemo(() => {
    if (currIndex !== -1 && letterElements.current) {
      let spanref = letterElements.current.children[currIndex];
      let left = spanref.offsetLeft + spanref.offsetWidth - 2;
      let top = spanref.offsetTop - 2;
      return { left, top };
    } else {
      return {
        left: -2,
        top: 2,
      };
    }
  }, [currIndex]);

  //set WPM
  useEffect(() => {
    if (phase === 2 && endTime && startTime) {
      setDuration(Math.floor((endTime - startTime) / 1000));
    } else {
      setDuration(0);
    }
  }, [phase, startTime, endTime]);

  //handle key presses
  const handleKeyDown = (letter, control) => {
    if (letter === "Escape") {
      resetTyping();
    } else if (letter === "Backspace") {
      deleteTyping(control);
    } else if (letter.length === 1) {
      insertTyping(letter);
    }
  };

  return (
    <div>
      <div
        tabIndex={0}
        onKeyDown={(e) => handleKeyDown(e.key, e.ctrlKey)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-xl outline-none relative font-serif`}
      >
        <div
          ref={letterElements}
          className="tracking-wide pointer-events-none select-none my-4 text-3xl"
          tabIndex={0}
        >
          {text.split("").map((letter, index) => {
            let state = charsState[index];
            let color =
              state === 0
                ? "text-gray-900"
                : state === 1
                ? "text-gray-400,"
                : "text-red-900";
            return (
              <span key={letter + index} className={`${color}`}>
                {letter}
              </span>
            );
          })}
        </div>
        {phase !== 2 && isFocused ? (
          <span
            style={{
              left: pos.left,
              top: pos.top,
            }}
            className={`caret border-l-2 border-white`}
          >
            &nbsp;
          </span>
        ) : null}
      </div>
      <p className="text-sm text-center">
        {phase === 2 && startTime && endTime ? (
          <>
            <span className="text-green-500 mr-4">
              WPM: {Math.round(((60 / duration) * correctChar) / 5)}
            </span>
            <span className="text-blue-500 mr-4">
              Accuracy: {((correctChar / text.length) * 100).toFixed(2)}%
            </span>
            <span className="text-yellow-500 mr-4">Duration: {duration}s</span>
          </>
        ) : null}
        <span className="mr-4 font-bold text-black text-xl">
          {" "}
          Character Count: {currIndex}
        </span>
        <span className="mr-4 font-bold text-black text-xl">
          {" "}
          Correct: {correctChar}
        </span>
        <span className="mr-4 font-bold text-black text-xl">
          {" "}
          Incorrect: {errorChar}
        </span>
        <h5 className="mx-auto border border-gray-300 bg-primary text-white text-sm font-bold rounded-lg block lg:w-1/2 p-2.5 text-center my-4">
          Press ESC to reset
        </h5>
      </p>
    </div>
  );
};

export default TypingThroughInput;
