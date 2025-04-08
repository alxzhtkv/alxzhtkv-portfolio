export function Contacts() {
  return (
    <div className="w-full flex flex-col items-end justify-start">
      <div className="w-full h-[100vh] relative flex items-end justify-start">
        <img
          src={"/images/background.png"}
          alt="contacts"
          className="w-full h-full object-cover  absolute top-0 left-0 "
        />
        <div className="z-10 w-full flex flex-col justify-start">
          <h3 className="text-default text-[220px] leading-[187px] pl-11 pb-11 uppercase font-normal">
            Let's <br /> connect
          </h3>
          <div className="py-5 px-11 w-full flex items-center justify-end gap-[50px]">
            <div className="flex items-center justify-center h-11 px-6 border border-default rounded-[19px] cursor-pointer">
              <p className="text-default text-2xl">alxzhtkv@gmail.com</p>
            </div>
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
              <p className="text-default text-2xl"> Behance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
