import React from "react";
import { useSpring, animated } from "react-spring";

export default function DemoUseSpring() {
  const props = useSpring({
    color_text: "red",
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const propsAnimNumber = useSpring({num:1200, from:{num:-100}})
  return (
    <div>
      {" "}
      <h1>Change color text</h1>
      <animated.div style={props}>I will fade in</animated.div>
      <h1>Changer number</h1>
      <animated.h1>
          {propsAnimNumber.num}
      </animated.h1>
    </div>
  );
}
