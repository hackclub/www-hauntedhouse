import Image from "next/image";
import { Inter } from "next/font/google";

import { motion, useScroll } from "framer-motion";
import { useRef, useState,useEffect  } from "react";
import { useRouter } from "next/router";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ref = useRef(null);


  const { scrollYProgress } = useScroll({
    // target: ref,
    // offset: ["end end", "start start"],
  });


  const router = useRouter(); 

  const [open, setOpen] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {

    if (open) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    let timeoutId;

    if (clickedOnce && open) {
      timeoutId = setTimeout(() => {
        router.push("/invitation");
      }, 2500); 
    }

    return () => {
      clearTimeout(timeoutId);  
    };
  }, [open, clickedOnce, router]);

  const handleClick = () => {
    if (!clickedOnce) {
      setClickedOnce(true);
    }
    setOpen(!open);
  };

  return (
    <main>
      <audio ref={audioRef} src={"/doors/dooraudio.mp3"} />
      <div className="fixed sm:top-[60px] left-0 z-40 flex items-center m-auto sm:ml-[320px]">
        <button
        onClick={handleClick}
        >

          <Image
          alt="door"
          width={100}
          height={100}
            src="/doors/door1.svg"
            className={`sm:h-[80vh] w-full transition duration-500 ease-in-out ${open && "-translate-x-[15vw]"
              } `}
          />
        </button>

        <button
        onClick={handleClick}
        >
          <Image
          width={100}
          height={100}
          alt="door"
            src="/doors/door2.svg"
            className={`sm:h-[80vh] w-full transition sm:bg-black duration-500 ease-in-out transform  z-50 ${open && "translate-x-[15vw] bg-transparent"
              }`}
          />
        </button>
      </div>
      <motion.div className="flex items-center h-[100vh] w-screen bg-[url('/doors/stairs.jpg')] bg-cover bg-no-repeat bg-center"
         initial={{ scale: 1 }}
         animate={{ scale: open ? 1.2 : 1 }}
         transition={{ duration: 0.5 }}
      >
      
      </motion.div>
    </main>
  );
}


