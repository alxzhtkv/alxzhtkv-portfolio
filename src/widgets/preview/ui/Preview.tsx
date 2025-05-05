export function Preview() {
  return (
    <div className="wrapper overflow-hidden sm:overflow-visible w-full min-h-screen sm:min-h-[75vh] lg:min-h-screen h-auto flex flex-col items-center justify-center relative">
      <div className="absolute top-0 -left-7">
        <img
          src={"/images/black_white.png"}
          alt="reading"
          className="sm:block hidden lg:w-[27vw] w-[40vw]  lg:max-w-[450px]"
        />
      </div>
      <div className="absolute top-4 sm:right-0 right-[-10%] flex-row sm:flex-col-reverse lg:flex-row flex  items-center justify-center">
        <div className="flex flex-col  sm:flex-col-reverse lg:flex-col items-start sm:-translate-y-5 translate-x-5 lg:translate-y-0">
          <p className="text-white text-base sm:text-[clamp(18px,1.5vw,24px)] leading-[1.2] sm:text-right uppercase sm:translate-x-[-30%] translate-x-0">
            my digital
            <br /> arts{" "}
          </p>
          <div className="mx-10 lg:pb-0 pb-3">
            <img
              src={"/icons/arrow.svg"}
              alt="arrow"
              className="lg:rotate-[-13deg] rotate-[-3deg] sm:scale-x-[-1] sm:max-w-[50px] max-w-[38px] lg:scale-x-100   "
            />
          </div>
        </div>

        <img
          src={"/images/arts.png"}
          alt="arts"
          className="lg:w-[32vw] sm:w-[44vw] w-[75vw] -rotate-[-7deg] sm:rotate-[0eg] lg:max-w-[500px]"
        />
      </div>
      <div className="absolute bottom-0 left-6 flex items-center ">
        <img src={"/images/me.png"} alt="me" className="lg:w-[13vw] sm:w-[19vw] w-[32vw] sm:pb-0 pb-5 sm:translate-x-0 translate-x-[-10%]  lg:max-w-[220px] rotate-[23deg] " />
        <div className="flex flex-col items-end">
          <p className="text-white text-base sm:text-[clamp(18px,1.5vw,24px)] leading-[1.2] text-right uppercase translate-x-[30%]">
            it's me ;)
          </p>
          <div className="mx-10">
            <img
              src={"/icons/arrow.svg"}
              alt="arrow"
              className="sm:max-w-[50px] max-w-[38px]  scale-x-[-1] rotate-[23deg] "
            />
          </div>
        </div>
      </div>
      <img
        src={"/images/book_bear.png"}
        alt="reading"
        className="sm:block hidden lg:w-[30vw] w-[45vw]  lg:max-w-[500px] absolute -bottom-10 right-0"
      />
      <div className="sm:px-0 px-8 flex flex-col items-start gap-0">
        <h3 className="uppercase text-default text-[clamp(20px,4vw,56px)] sm:pb-0 pb-2 leading-[1] font-medium">
          Front-end developer
        </h3>
        <h1 className="text-white text-[clamp(48px,8vw,120px)] sm:leading-[1.1] leading-[1] font-medium uppercase  sm:pb-0 pb-4 ">
          Alexandra Zhitkova
        </h1>
        <div className="sm:flex-row flex-col flex w-full justify-between items-start text-default-gray text-[clamp(18px,2vw,30px)] leading-[1.2] text-right">
          <div className="sm:w-auto w-full flex flex-col gap-1 text-left ">
            <p className="sm:text-left text-right">Redux/Redux-toolkit</p>
            <p className="sm:text-left text-right">Effector, Zustand</p>
          </div>
          <div className="sm:w-auto w-full flex flex-col gap-1 ">
            <p className="text-left">React, Typescript/JavaScript</p>
            <p className="text-left">Webpack, Vite</p>
          </div>

          <div className="sm:w-auto w-full flex flex-col gap-1">
            <p>CSS, SCSS</p>
            <p>TailwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
