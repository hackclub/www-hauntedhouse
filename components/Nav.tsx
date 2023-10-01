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
        gap: "16px",
        position: "fixed",
        top: 0,
        zIndex: 599,
        width: "100%",
        display: "flex",
        opacity: 0,
      }}
      className="px-4 py-2 text-beige  bg-black shadow-none shadow-accent-default"
      animate={controls}
    >
      <div className="w-full flex items-center justify-between">
        <p className="text-3xl tracking-wide"></p>

        <a
          href="#signup"
          className="px-6 py-1 text-xl tracking-wide rounded-md bg-accent-default hover:bg-accent-darker transition duration-100 ease-in-out  text-beige"
        >
          Register
        </a>
      </div>
    </motion.div>
  );
};
