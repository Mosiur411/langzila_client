import React from "react";
import CanvasDraw from "react-canvas-draw";

import { useIsMobileOrTablet } from "./isMobileOrTablet";
import "./canvas.css";

import { useState } from "react";
import Navbar from "../Home/Navbar/Navbar";

function Canvas() {
  const [color, setColor] = useState("gray")
  const isMobOrTab = useIsMobileOrTablet();

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-[100vh]">
        <div>
          <h1 className="text-4xl text-primary font-bold text-center mt-[-30px]">Draw Your Favourite Cartoon</h1>
          <h3 className="text-center">Art with your mouse or in mobile with your finger</h3>

          <p className="text-center mb-10">
            <span role="img" aria-label="fingers pointing down">
              👇👇👇👇
            </span>{" "}
            Use your {isMobOrTab ? "finger" : "mouse"} to draw{" "}
            <span role="img" aria-label="fingers pointing down">
              👇👇👇👇
            </span>
          </p>
          <div className="flex justify-center items-center">
            <CanvasDraw brushColor={color} loadTimeOffset={10} width="500px"
              style={{
                boxShadow:
                  "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
              }}
            />

          </div>
        </div>

      </div>
    </div>
  );
}

export default Canvas;

