export function Contacts() {
  const links = [
    {
      href: "https://github.com/alxzhtkv",
      text: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/alxzhtkv/",
      text: "Linkedin"
    },
    {
      href: "https://t.me/alxzhtkv",
      text: "Telegram"
    },
    {
      href: "https://www.behance.net/alxzhtkv",
      text: "Behance"
    },
    {
      href: "mailto:alxzhtkv@gmail.com",
      text: "alxzhtkv@gmail.com"
    }
  ];
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
          <div className="relative w-fit">
            <h3 className="text-default text-[clamp(76px,14vw,220px)] leading-[clamp(70px,10vw,187px)] md:pl-11 pl-5 md:pb-11 pb-10 uppercase font-normal w-fit cursor-pointer">
              Let's <br /> connect
            </h3>

            <div className="flex gap-8  items-start justify-start absolute bottom-1/2 right-10 translate-x-[100%]">
              <img src={"/icons/arrow.svg"} alt="arrow" className=" min-[1025px]:max-w-[90px] max-w-[50px] rotate-[109deg]  " />
              <p className="text-white text-[clamp(18px,1.5vw,24px)] leading-[1.2] text-right uppercase -translate-y-1/2">
                click here
              </p>
            </div>
          </div>

          <footer className="py-5 px-10 w-full flex items-center justify-end gap-[50px] max-[1024px]:hidden">
            {links.map((link) => (
              <a
                href={link.href}
                target="_blank"
                className="flex items-center justify-center h-11 px-6 border border-default rounded-[19px] cursor-pointer hover:bg-white/10 transition-all"
              >
                <p className="text-default text-2xl">{link.text}</p>
              </a>
            ))}
          </footer>
        </div>
      </div>
      <footer className="py-7 px-5 w-full items-center justify-between flex-wrap gap-4  max-[1024px]:flex hidden text-xl">
        {links.map((link) => (
          <a
            href={link.href}
            target="_blank"
            className="flex items-center justify-center flex-auto h-11 px-2 border border-default rounded-[19px] cursor-pointer"
          >
            <p>{link.text}</p>
          </a>
        ))}
      </footer>
    </div>
  );
}
