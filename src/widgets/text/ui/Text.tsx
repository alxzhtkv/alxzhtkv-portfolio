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
    <div className="flex items-center justify-center pt-20 pb-40">
      <div className="flex items-start justify-start  gap-x-[17px] flex-wrap max-w-[1600px] px-11 2xl:px-0" id="trans_text">
        {textArr.map((line) => (
          <>
            {line.line.map((word, index) => {
              const opacityIncrement = 0.3 + scrollPercentage * 0.1;
              return (
                <div
                  key={`word_${index}`}
                  className="text-default text-be-vietnam-pro text-[clamp(24px,6vw,64px)] leading-[105%] min-[1025px]:text-[clamp(24px,5.6vw,96px)] md:leading-[1] 2xl:leading-[1.15] uppercase transition-all ga"
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
      </div>
    </div>
  );
}
