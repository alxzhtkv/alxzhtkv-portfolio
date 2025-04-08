export function CV() {
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center mt-60 2xl:mt-0">
      <div className="flex items-center gap-20">
        <h3 className="text-default text-7xl uppercase font-be-vietnam-pro  -translate-y-[100%] cursor-pointer">
          See my <br /> full CV;)
        </h3>
        <div className="flex relative items-center justify-center">
          <img src="/images/cv.png" alt="cv" className="2xl:max-h-[80vh] max-h-[90vh] cursor-pointer" />
          <img
            src="/icons/arrow.svg"
            alt="arrow"
            className="mt-5 ml-15 absolute -translate-x-full -left-3 2xl:h-auto h-[100px]"
          />
        </div>
      </div>
    </div>
  );
}
