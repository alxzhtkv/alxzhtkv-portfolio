import { motion, Transition } from "framer-motion";

export default function Prealoader() {
  const bounceTransition: Transition = {
    // y: {
    //   duration: 0.7,
    //   repeat: Infinity,
    //   repeatType: "reverse",
    //   ease: "easeOut"
    // },
    rotate: {
      duration: 1.4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeOut"
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] w-full min-h-screen bg-background flex items-center justify-center bg-[url('/preloader_bg.png')] bg-contain lg:bg-cover bg-center transition-all">
      <motion.div
        className="md:w-[150px] md:h-[150px] w-[100px] h-[100px] border-4 border-white rounded-full flex items-center justify-center"
        animate={{
          //   y: ["100%", "-100%"],
          rotate: ["0deg", "360deg"]
        }}
        transition={bounceTransition}
      >
        <img src={"/favicon.svg"} alt="logo" className="w-[120px] h-[120px]" />
      </motion.div>
    </div>
  );
}
