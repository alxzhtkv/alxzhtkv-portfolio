export function CV() {
  return (
    <div className="w-full flex items-center justify-center 2xl:mt-0 py-20 ">
      <div className="flex items-center min-[1025px]:gap-20 wrapper px-10">
        <h3 className="text-default text-[clamp(28px,4vw,72px)] leading-[1] uppercase font-be-vietnam-pro  -translate-y-[100%] cursor-pointer max-[1025px]:flex-1">
          See my <br /> full CV;)
        </h3>
        <div className="flex relative items-center justify-center max-[1025px]:flex-[3]">
          <a href="/AlexandraZhitkovaCV.pdf" target="_blank">
          <img src="/images/cv_stack.png" alt="cv" className="2xl:max-h-[80vh] md:max-h-[80vh]  cursor-pointer" />
          </a>
         
          <img
            src="/icons/arrow.svg"
            alt="arrow"
            className="mt-5 ml-10 absolute -translate-x-full -left-3 min-[1025px]:max-w-[90px] max-w-[50px] "
          />
        </div>
      </div>
    </div>
  );
}
