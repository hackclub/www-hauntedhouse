import Image from "next/image";
import { Inter } from "next/font/google";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    // target: ref,
    // offset: ["end end", "start start"],
  });
  return (
    <main>
      <div className="flex">
        <motion.div
        // ref={ref}
        // initial={{ width: "100px" }}
        // style={{ scaleX: scrollYProgress }}
        >
          <img src="/house.svg" className="h-screen" />
        </motion.div>
        <div className="p-8 md:p-12">
          <h1 className="text-[#F9A245] text-6xl">The Haunted House</h1>
        </div>
      </div>

      <div className="h-screen"></div>
    </main>
  );
}
