import Image from "next/image";
import { Inter } from "next/font/google";

import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ref = useRef(null);

  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    // target: ref,
    // offset: ["end end", "start start"],
  });
  return (
    <main>
      <div className="fixed top-0 left-0 z-40 flex">
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >

          <img
            src="/door.png"
            className={`h-screen w-[50vw] bg-black text-white transition duration-500 ease-in-out ${open && "-translate-x-[40vw]"
              } `}
          />
        </button>

        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img
            src="/door.png"
            className={`h-screen w-[50vw] bg-black text-white transition  duration-500 ease-in-out transform ${open && "translate-x-[40vw]"
              }`}
          />
        </button>
      </div>
      <div className="flex items-center h-[100vh] w-screen bg-[url('/doors/stairs.jpg')] bg-contain bg-no-repeat bg-center">
        <button
          onClick={() => {
            alert("hi");
          }}
          className={`mx-auto z-50 text-white text-lg ${!open && "hidden"}`}
        >
        do you want to enter?
        </button>
      </div>
    </main>
  );
}
