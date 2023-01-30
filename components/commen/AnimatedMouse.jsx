import dynamic from "next/dynamic";

const AnimatedMouse = () => {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  return (
    <div>
      <AnimatedCursor
        innerSize={6}
        outerSize={32}
        color="255, 180, 0"
        outerAlpha={0.1}
        innerScale={0.8}
        outerScale={1.7}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
};

export default AnimatedMouse;
