export function Preview() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center justify-center relative">
      <div className="absolute top-0 left-0">
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
      </div>
      

      

      <div className="flex flex-col items-start gap-0">
        <h3 className="uppercase text-default text-6xl font-medium">Front-end developer</h3>
        <h1 className="text-white text-9xl font-medium uppercase">Alexandra Zhitkova</h1>
        <div className="flex w-full justify-between items-start">
          <div className="flex flex-col gap-1">
            <p className="text-default-gray text-3xl text-left">Redux/Redux-toolkit</p>
            <p className="text-default-gray text-3xl text-left">Effector, Zustand</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-default-gray text-3xl text-right">React, Typescript/JavaScript</p>
            <p className="text-default-gray text-3xl text-right">Webpack, Vite</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-default-gray text-3xl text-right">CSS, SCSS</p>
            <p className="text-default-gray text-3xl text-right">TailwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
