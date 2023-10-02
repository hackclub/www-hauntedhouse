import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const Nav = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  useEffect(
    () =>
      scrollYProgress.onChange((latest) => {
        if (latest > 0.1) {
          controls.start({
            opacity: 1,
            transition: { duration: 0.5 },
          });
        }
        if (latest == 0) {
          controls.start({
            opacity: 0,
            transition: { duration: 0.5 },
          });
        }
      }),
    []
  );
  return (
    <motion.div
      id="nav"
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        position: "fixed",
        top: 0,
        zIndex: 599,
        width: "100%",
        display: "flex",
        opacity: 0,
      }}
      className="px-4 py-2 text-beige bg-black shadow-none shadow-accent-default bg-opacity-60 border-b border-white/10 backdrop-blur-md backdrop-saturate-200"
      animate={controls}
    >
      <div className="w-full flex items-center justify-between">
        <p className="text-3xl tracking-wide text-accent-default sm:block hidden">The Hack Club Haunted House</p>
        <p className="text-3xl tracking-wide text-accent-default sm:hidden block">Haunted House</p>
        <a
          href="#signup"
          className="px-10 py-2 text-[1.3rem] tracking-wide rounded-md bg-accent-default hover:bg-accent-darker transition duration-100 ease-in-out  text-beige"
        >
          Register
        </a>
      </div>
    </motion.div>
  );
};
