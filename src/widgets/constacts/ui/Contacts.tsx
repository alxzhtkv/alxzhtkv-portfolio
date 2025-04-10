export function Contacts() {
  return (
    <div className="w-full flex flex-col items-end justify-start">
      <div className="w-full h-[82vh] sm:h-[100vh] relative flex items-end justify-start">
        <img
          src={"/images/background.png"}
          alt="contacts"
          className="w-full h-full object-cover  absolute top-0 left-0 max-[1025px]:hidden "
        />
        <img
          src={"/images/background_tablet.png"}
          alt="contacts"
          className="w-full h-full object-cover  absolute top-0 left-0 min-[1025px]:hidden "
        />
        <div className="z-10 w-full flex flex-col justify-start ">
          <h3 className="text-default text-[clamp(76px,14vw,220px)] leading-[clamp(70px,10vw,187px)] md:pl-11 pl-5 md:pb-11 pb-10 uppercase font-normal">
            Let's <br /> connect
          </h3>
          <div className="py-5 px-11 w-full flex items-center justify-end gap-[50px] max-[1024px]:hidden">
            <div className="flex items-center justify-center h-11 px-6 border border-default rounded-[19px] cursor-pointer">
              <p className="text-default text-2xl">GitHub</p>
            </div>
            <div className="flex items-center justify-center h-11 px-6 border border-default rounded-[19px] cursor-pointer">
              <p className="text-default text-2xl">Linkedin</p>
            </div>
            <div className="flex items-center justify-center h-11 px-6 border border-default rounded-[19px] cursor-pointer">
              <p className="text-default text-2xl">Telegram</p>
            </div>
            <div className="flex items-center justify-center h-11 px-6 border border-default rounded-[19px] cursor-pointer">
              <p className="text-default text-2xl">Behance</p>
            </div>

            <div className="flex items-center justify-center h-11 px-6 border border-default rounded-[19px] cursor-pointer">
              <p className="text-default text-2xl">alxzhtkv@gmail.com </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="py-7 px-5 w-full items-center justify-between flex-wrap gap-4  max-[1024px]:flex hidden text-xl">
            <div className="flex items-center justify-center flex-auto h-11 px-2 border border-default rounded-[19px] cursor-pointer text-default ">
              <p> GitHub</p>
            </div>
            <div className="flex items-center justify-center flex-auto h-11 px-2 border border-default rounded-[19px] cursor-pointer">
              <p>Linkedin</p>
            </div>
            <div className="flex items-center justify-center flex-auto h-11 px-2 border border-default rounded-[19px] cursor-pointer">
              <p>Telegram</p>
            </div>
            <div className="flex items-center justify-center flex-auto h-11 px-2 border border-default rounded-[19px] cursor-pointer">
              <p>Behance</p>
            </div>

            <div className="flex items-center justify-center flex-auto h-11 px-2 border border-default rounded-[19px] cursor-pointer">
              <p>alxzhtkv@gmail.com </p>
            </div>
          </div>
    </div>
  );
}
