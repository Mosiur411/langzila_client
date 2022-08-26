import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Translator = () => {
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("ar");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get("https://libretranslate.com/languages", {
        headers: { accept: "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);

  const translate = () => {
    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    axios.post(params);

    axios
      .post("https://libretranslate.de/translate", params, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.translatedText);
      });
  };

  //   curl -X GET "https://libretranslate.com/languages" -H  "accept: application/json"
  return (
    <div className="">
      <div className="w-1/2 mx-auto my-8 shadow-md flex justify-center">
        <div className="p-4">
          <span className="font-bold text-black">Your Language: </span>
          <select
            className=""
            onChange={(event) => setFrom(event.target.value)}
          >
            {options.map((option) => (
              <option key={options.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="p-4">
          <span className="font-bold text-black pl-4">Selected Language: </span>
          <select onChange={(event) => setTo(event.target.value)}>
            {options.map((option) => (
              <option key={options.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-center w-1/2 mx-auto">
        <div className="w-full">
          <textarea
            onInput={(event) => setInput(event.target.value)}
            cols="30"
            rows="10"
            className="text-center textarea textarea-info text-xl font-bold mr-2"
            placeholder="Enter Your Text"
          ></textarea>
        </div>
        <div className="w-full">
          <textarea
            value={output}
            cols="30"
            rows="10"
            className="text-center textarea textarea-info text-xl font-bold"
            placeholder="Translation"
          ></textarea>
        </div>
      </div>
      <div className="text-center py-8">
        <button
          onClick={(e) => translate()}
          className="border border-gray-300 bg-primary text-white text-md rounded-lg px-4 py-2"
        >
          Translate
        </button>
      </div>
    </div>
  );
};

export default Translator;
