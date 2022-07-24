import DevSixer from "./Components/DevSixer";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div>
      <DevSixer></DevSixer>
      <AnimatedCursor
        innerSize={15}
        outerSize={8}
        color='255, 255, 0'
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
