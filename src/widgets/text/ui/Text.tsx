import { textArr } from "@shared/constants/text";
import { useEffect } from "react";

import { useState } from "react";

export function Text() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const text = document.getElementById("trans_text");
      if (!text) return;
      const elementRect = text.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleHeight = windowHeight - elementRect.top;
      const percentVisible = visibleHeight / elementRect.height;
      // console.log(percentVisible)

      setScrollPercentage(percentVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrapper flex items-center justify-center pt-20 sm:pb-40 pb-10">
      <div
        className="flex items-start justify-start gap-x-[9px]  sm:gap-x-[17px] flex-wrap max-w-[1600px] px-6 sm:px-10 2xl:px-0 relative"
        id="trans_text"
      >
        {textArr.map((line) => (
          <>
            {line.line.map((word, index) => {
              const opacityIncrement = 0.3 + scrollPercentage * 0.1;
              return (
                <div
                  key={`word_${index}`}
                  className="text-default text-be-vietnam-pro text-[clamp(32px,6.5vw,64px)] leading-[105%] min-[1025px]:text-[clamp(23px,5.6vw,96px)] md:leading-[1] 2xl:leading-[1.15] uppercase transition-all ga"
                  style={{
                    opacity: scrollPercentage - word.position >= line.scrollposition ? 0.5 + opacityIncrement : 0.3
                  }}
                >
                  {word.word}
                </div>
              );
            })}
          </>
        ))}
        <div className="flex flex-col items-center justify-center sm:absolute  lg:-bottom-[5%] -bottom-[19%]  lg:right-[15%] sm:right-[10%] w-full sm:w-fit sm:pt-0 pt-4 pl-[25%]">
          <img src={"/icons/arrow.svg"} alt="arrow" className=" sm:max-w-[50px] max-w-[38px] rotate-[180deg]  " />
          <p className="text-white text-[clamp(18px,1.5vw,24px)] leading-[1.2] text-right uppercase mt-3 sm:translate-x-1/3">
            about me
          </p>
        </div>
      </div>
    </div>
  );
}
