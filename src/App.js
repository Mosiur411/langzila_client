import DevSixer from "./Components/DevSixer";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Footer from "./Components/Home/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [show, setShow] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (show) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    AOS.init();
  }, [show]);

  return (
    <div className={`${show ? "bg-black text-white" : "text-[#606060]"}`}>
      <DevSixer show={show} setShow={setShow}></DevSixer>
      <AnimatedCursor
        color="254, 74, 85"
        clickables={[
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
        ]}
      />
      <Footer></Footer>

    </div>
  );
}

export default App;
