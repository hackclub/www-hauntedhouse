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
      <div className="fixed top-[50px] left-0 z-40 flex items-center m-auto ml-[320px]">
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >

          <Image
          alt="door"
          width={100}
          height={100}
            src="/doors/door1.svg"
            className={`h-[80vh] w-full bg-black transition duration-500 ease-in-out ${open && "-translate-x-[15vw]"
              } `}
          />
        </button>

        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Image
          width={100}
          height={100}
          alt="door"
            src="/doors/door2.svg"
            className={`h-[80vh] w-full transition bg-black duration-500 ease-in-out transform mt-10 ${open && "translate-x-[15vw]"
              }`}
          />
        </button>
      </div>
      <div className="flex items-center h-[100vh] w-screen bg-[url('/doors/stairs.jpg')] bg-cover bg-no-repeat bg-center">
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
