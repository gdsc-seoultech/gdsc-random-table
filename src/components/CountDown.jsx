import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const CountDown = ({ animationCallback }) => {
  const lottieInfo = useRef();

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieInfo.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../assets/countdown.json"),
    });
    animation.setSpeed(1);
    animation.addEventListener("complete", () => {
      animationCallback();
    });
  }, []);

  return (
    <div>
      <div ref={lottieInfo} className="lottie" />
    </div>
  );
};

export default CountDown;
