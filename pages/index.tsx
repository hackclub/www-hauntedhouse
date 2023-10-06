import Image from "next/image";
import { Inter } from "next/font/google";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Youtube from "react-youtube";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ref = useRef(null);

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    // target: ref,
    // offset: ["end end", "start start"],
  });

  const [videoStarted, setVideoStarted] = useState(false);

  const handleVideoPlay = () => {
    setVideoStarted(true);
  };


  useEffect(() => {
    setTimeout(() => {
      // router.push("/invitation");
    }, 5500);
  }, []);

  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoStarted) {
      const timer = setTimeout(() => {
        setShowImage(true);
        videoRef.current.pause();
      }, 1900);

      return () => clearTimeout(timer);
    }
  }, [videoStarted]);

  const handleImageClick = () => {
    setShowImage(false);
    // videoRef.current.play();
    handleVideoEnd();
  };

  const handleVideoEnd = () => {
    router.push("/invitation");
  };

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
      <video
        autoPlay
        muted
        ref={videoRef}
        className="doorVideo"
        onEnded={handleVideoEnd}
        onPlay={handleVideoPlay} 
      >
        {/* <source src="/exported_video.webm" type="video/webm" /> */}
        <source src="/newanimation.webm" type="video/webm" />
      </video>

      {showImage && (
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={"/entercard.webp"}
            alt="entercard"
            onClick={handleImageClick}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            height={700}
            width={700}
          />
        </motion.div>
      )}
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
