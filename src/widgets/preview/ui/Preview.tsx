export function Preview() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center justify-center relative">
      {/* <div className="absolute top-0 left-0">
        <img src={"/images/reading.png"} alt="reading" className="w-[303px] rotate-[18.45deg]" />
      </div>
      <div className="absolute top-0 right-0">
        <img src={"/images/arts.png"} alt="arts" className="w-[600px] " />
      </div>
      <div className="absolute bottom-0 left-6">
        <img src={"/images/me.png"} alt="me" className="w-[250px] rotate-[23deg] " />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={"/images/bear.png"} alt="reading" className="w-[400px] rotate-[-15deg]" />
      </div> */}
      

      

      <div className="flex flex-col items-start gap-0">
        <h3 className="uppercase text-default text-[clamp(24px,4vw,56px)] leading-[1] font-medium">Front-end developer</h3>
        <h1 className="text-white text-[clamp(45px,8vw,128px)] leading-[1.1] font-medium uppercase">Alexandra Zhitkova</h1>
        <div className="flex w-full justify-between items-start text-default-gray text-[clamp(18px,2vw,30px)] leading-[1.2] text-right">
          <div className="flex flex-col gap-1 text-left" >
            <p >Redux/Redux-toolkit</p>
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
