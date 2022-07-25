import DevSixer from "./Components/DevSixer";
import AnimatedCursor from "react-animated-cursor"
import { useEffect, useState } from "react";
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
        innerSize={15}
        outerSize={8}
        color='254, 74, 85'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </div>
  );
}

export default App;
