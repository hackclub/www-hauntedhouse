import { BsChevronDoubleDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const InvitationHero = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setIsVisible(window.scrollY < scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[url('/alleyway-background-compressed.webp')] bg-left-top w-screen h-screen justify-center flex flex-col relative items-center">
      <div className="px-4 md:px-6 w-full md:w-[80%] max-w-5xl">
        <button className="card relative aspect-[1421/904] h-auto w-full  mx-auto">
          <img
            src="/quainthouse.webp"
            className={`card-side front shadow-2xl shadow-red-500  border-[0.8rem]   transition border-white`}
          />
          <img
            src="/changedpostcard.webp"
            className={`card-side back shadow-2xl shadow-red-500  border-[0.8rem]   transition border-white`}
          />
        </button>
      </div>

      {/* <h1 className="text-7xl  text-accent-default">The Haunted House</h1> */}

      <div className="pointer-events-none fixed bg-gradient-to-b from-transparent from-80% md:from-80% z-[99] to-black w-full h-full"></div>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            zIndex: 70,
          }}
          className="pointer-events-none flex justify-center h-[30%] absolute bottom-0 z-[99]  w-full"
        >
          <BsChevronDoubleDown
            style={
              {
                // zIndex: 60,
              }
            }
            className="text-beige  animate-bounce absolute bottom-10"
            size={40}
          />
        </motion.div>
      )}

      <div
        style={{ zIndex: 40 }}
        className="pointer-events-none flex justify-center bg-gradient-to-b from-transparent h-[30%] absolute bottom-0 from-0% z-[99] to-black w-full"
      ></div>

      {/* <div class=""></div> */}
    </div>
  );
};
