import dynamic from "next/dynamic";

const AnimatedMouse = () => {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  return (
    <div>
      <AnimatedCursor
        innerSize={7}
        outerSize={30}
        color="255, 180, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
};

export default AnimatedMouse;
