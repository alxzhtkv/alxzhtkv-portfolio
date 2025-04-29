export function Preview() {

  return (
    <div className="wrapper w-full min-[1025px]:min-h-screen min-h-[75vh] h-auto flex flex-col items-center justify-center relative">
      <div className="absolute top-0 -left-7">
        <img
          src={"/images/black_white.png"}
          alt="reading"
          className="min-[1025px]:w-[27vw] w-[40vw]  min-[1025px]:max-w-[450px]"
        />
      </div>
      <div className="absolute top-4 right-0 min-[1025px]:flex-row flex flex-col-reverse items-center justify-center">
        <div className="flex flex-col-reverse min-[1025px]:flex-col items-start -translate-y-5 min-[1025px]:translate-y-0">
          <p className="text-white text-[clamp(18px,1.5vw,24px)] leading-[1.2] text-right uppercase translate-x-[-30%]">
            my digital arts{" "}
          </p>
          <div className="mx-10 min-[1025px]:pb-0 pb-3">
            <img
              src={"/icons/arrow.svg"}
              alt="arrow"
              className="min-[1025px]:max-w-[90px]  min-[1025px]:rotate-[-13deg] rotate-[-3deg] scale-x-[-1] max-w-[50px] min-[1025px]:scale-x-100   "
            />
          </div>
        </div>

        <img
          src={"/images/arts.png"}
          alt="arts"
          className="min-[1025px]:w-[32vw] w-[44vw]  min-[1025px]:max-w-[500px]"
        />
      </div>
      <div className="absolute bottom-0 left-6 flex items-center ">
        <img
          src={"/images/me.png"}
          alt="me"
          className="min-[1025px]:w-[13vw] w-[19vw]  min-[1025px]:max-w-[220px] rotate-[23deg] "
        />
        <div className="flex flex-col items-end">
          <p className="text-white text-[clamp(18px,1.5vw,24px)] leading-[1.2] text-right uppercase translate-x-[30%]">
            it's me ;)
          </p>
          <div className="mx-10">
            <img
              src={"/icons/arrow.svg"}
              alt="arrow"
              className="min-[1025px]:max-w-[90px] max-w-[50px]  scale-x-[-1] rotate-[23deg] "
            />
          </div>
        </div>
      </div>

      {/* <div className="absolute -bottom-10 right-0 overflow-hidden "> */}
      <img
        src={"/images/book_bear.png"}
        alt="reading"
        className="min-[1025px]:w-[30vw] w-[45vw]  min-[1025px]:max-w-[500px] absolute -bottom-10 right-0"
      />
      {/* </div> */}

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
