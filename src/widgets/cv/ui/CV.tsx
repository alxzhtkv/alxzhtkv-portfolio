import { WebpImage } from "@shared/ui/webp-image";
import { motion } from "motion/react";

export function CV() {
  return (
    <div className="w-full flex items-center justify-center 2xl:mt-0 sm:py-20 pt-5 ">
      <div className="sm:flex-row flex flex-col sm:items-center items-start min-[1025px]:gap-20 wrapper sm:px-10 px-6">
        <h3 className="text-default text-xl sm:text-[clamp(28px,4vw,72px)] leading-[1] uppercase font-be-vietnam-pro  sm:-translate-y-[100%] cursor-pointer max-[1025px]:flex-1 ">
          See my <br className="sm:block hidden" /> full CV;)
        </h3>
        <div className="flex sm:flex-row flex-col-reverse relative sm:items-center items-start justify-center max-[1025px]:flex-[3]">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.8 }}
            href="/AlexandraZhitkovaCV.pdf"
            target="_blank"
          >
            <WebpImage
              src="/images/cv_stack.png"
              alt="cv"
              className="2xl:max-h-[80vh] md:max-h-[80vh] cursor-pointer sm:translate-x-0 translate-x-[1%]"
            />
          </motion.a>

          <img
            src="/icons/arrow.svg"
            alt="arrow"
            className="mt-5 sm:ml-10 ml-5 sm:absolute sm:-translate-x-full sm:-left-3 sm:max-w-[50px] max-w-[38px] "
          />
        </div>
      </div>
    </div>
  );
}
