import Image from "next/image";
import { Inter } from "next/font/google";

import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import Youtube from "react-youtube";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ref = useRef(null);

  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    // target: ref,
    // offset: ["end end", "start start"],
  });

  return (
    // <main>
    //   <div className="relative z-40 max-w-[49rem] flex items-center m-auto">
    //     <button
    //       onClick={() => {
    //         setOpen(!open);
    //       }}
    //     >
    //       <img
    //         alt="door"
    //         width={100}
    //         height={100}
    //         src="/door1.png"
    //         className={`translate-x-[50%] w-[50%]  h-[80vh] left-0 absolute top-[8vh] transition duration-500 ease-in-out ${
    //           open && "-translate-x-[15vw]"
    //         } `}
    //       />
    //     </button>

    //     <button
    //       onClick={() => {
    //         setOpen(!open);
    //       }}
    //     >
    //       <img
    //         width={100}
    //         height={100}
    //         alt="door"
    //         src="/door2.png"
    //         className={`w-[60%] min translate-x-[60%]  h-[83vh] absolute transition top-[5vh] right-0  duration-500 ease-in-out transform mt-10 ${
    //           open && "translate-x-[15vw]"
    //         }`}
    //       />
    //     </button>
    //   </div>
    //   <div className="flex items-center h-[100vh] w-screen bg-[url('/doors/stairs.jpg')] bg-cover bg-no-repeat bg-center">
    //     <button
    //       onClick={() => {
    //         alert("hi");
    //       }}
    //       className={`mx-auto z-50 text-white text-lg ${!open && "hidden"}`}
    //     >
    //       do you want to enter?
    //     </button>
    //   </div>
    // </main>

    <main className="h-screen relative">
      <video autoPlay muted className="doorVideo">
        <source src="/exported_video.webm" type="video/webm" />
      </video>

      {/* <Youtube
        videoId="VaNuWtcJOkc"
        className="doorVideo"
        opts={{
          playerVars: {
            playsinline: 1,
            controls: 0,
            autoplay: 1,
            // controls: 0,
            // showinfo: 0,
            // loop: 1,
          },
        }}
        onReady={_onReady}
      /> */}
    </main>
  );
}
