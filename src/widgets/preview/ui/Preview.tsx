export function Preview() {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col items-center justify-center relative">
      <div className="absolute top-0 left-0">
        <img src={"/images/black_white.png"} alt="reading" className="w-[27vw] max-w-[518px]" />
      </div>
      <div className="absolute top-4 right-0 flex items-center justify-center">
        <div className="flex flex-col items-start">
          <p className="text-white text-[clamp(18px,2vw,26px)] leading-[1.2] text-right uppercase translate-x-[-30%]">my digital arts </p>
          <div className="mx-10">
            <img src={"/icons/arrow.svg"} alt="arrow" className="max-w-[90px] rotate-[-13deg]   " />
          </div>
        </div>

        <img src={"/images/arts.png"} alt="arts" className="w-[32vw] max-w-[600px]" />
      </div>
      <div className="absolute bottom-0 left-6 flex items-center ">
        <img src={"/images/me.png"} alt="me" className="w-[13vw] max-w-[365px] rotate-[23deg] " />
        <div className="flex flex-col items-end">
          <p className="text-white text-[clamp(18px,2vw,26px)] leading-[1.2] text-right uppercase translate-x-[30%]">
            it's me ;)
          </p>
          <div className="mx-10">
            <img src={"/icons/arrow.svg"} alt="arrow" className="max-w-[90px]  scale-x-[-1] rotate-[23deg] " />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 right-0 overflow-hidden">
        <img src={"/images/book_bear.png"} alt="reading" className="w-[30vw] rotate-[-15deg]" />
      </div>

      <div className="flex flex-col items-start gap-0">
        <h3 className="uppercase text-default text-[clamp(24px,4vw,56px)] leading-[1] font-medium">
          Front-end developer
        </h3>
        <h1 className="text-white text-[clamp(45px,8vw,120px)] leading-[1.1] font-medium uppercase">
          Alexandra Zhitkova
        </h1>
        <div className="flex w-full justify-between items-start text-default-gray text-[clamp(18px,2vw,30px)] leading-[1.2] text-right">
          <div className="flex flex-col gap-1 text-left">
            <p>Redux/Redux-toolkit</p>
            <p>Effector, Zustand</p>
          </div>
          <div className="flex flex-col gap-1 ">
            <p>React, Typescript/JavaScript</p>
            <p>Webpack, Vite</p>
          </div>

          <div className="flex flex-col gap-1">
            <p>CSS, SCSS</p>
            <p>TailwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
