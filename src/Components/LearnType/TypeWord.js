import React from "react";
import TypingThroughInput from "./TypingThroughInput";
import "./TypeWord.css";
const TypeWord = () => {
  return (
    <div className="container mx-auto flex flex-col p-4">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-accent text-center py-8">
          Improve your writing skill in English
        </h1>
      </div>
      <h5 className="border border-gray-300 bg-primary text-white text-sm font-bold rounded-lg block lg:w-1/6 p-2.5 text-center my-4">
        Press ESC to reset
      </h5>
      <div className="border-2 p-4 rounded-lg">
        <h1 className="mb-2">Baa Baa Black Sheep</h1>
        <TypingThroughInput
          text={
            "Baa, baa black sheep. Have you any wool. Yes sir, yes sir. Three bags full. One for my master And one for my dame And one for the little boy. Who lives down the lane."
          }
        />
      </div>
    </div>
  );
};

export default TypeWord;
