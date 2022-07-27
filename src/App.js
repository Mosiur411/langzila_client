import DevSixer from "./Components/DevSixer";
import AnimatedCursor from "react-animated-cursor"
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
function App() {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState("light");
  console.log(show)
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
    document.documentElement.setAttribute('data-theme', theme);

    AOS.init();

  }, [theme]);
  return (
    <div className="text-[#606060]">
      <DevSixer show={show} setShow={setShow} theme={theme} setTheme={setTheme}></DevSixer>
      <AnimatedCursor
        color='254, 74, 85'
        clickables={[
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
        ]}
      />
    </div>
  );
}

export default App;
