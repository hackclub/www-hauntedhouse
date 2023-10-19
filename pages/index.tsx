import { CardSection } from "@/components/CardSection";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { InvitationHero } from "@/components/InvitationHero";
import { Nav } from "@/components/Nav";
import { Satellites } from "@/components/Satellites";
import { Signup } from "@/components/Signup";
import { WhatHackathon } from "@/components/WhatHackathon";
import { WhatIsThis } from "@/components/WhatIsThis";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
// import AnimatedCursor from "react-animated-cursor";
import FadeIn from "react-fade-in/lib/FadeIn";
import VisibilitySensor from "react-visibility-sensor";
import useSound from "use-sound";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { COLORS } from "@/components/NotesBoard";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  const [visibleOnce, setVisibleOnce] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const [play, { stop }] = useSound("/haunted.mp3", {
    volume: isMuted ? 0 : 1,
  });

  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <>
      {/* <div className="hidden">
        {COLORS.map((color, i) => (
          <div
            className={`bg-stickies-1 bg-stickies-2 bg-stickies-3 bg-stickies-4 bg-stickies-5 bg-stickies-6 bg-stickies-7 bg-stickies-0`}
          ></div>
        ))}
      </div> */}
      <div
        style={{
          zIndex: 999,
        }}
        className="fixed bottom-3 right-3"
      >
        <div
          className="bg-black border-gray-500 shadow-2xl hover:border-beige  hover:text-beige duration-150 text-accent-default hover:bg-accent-default border rounded-full py-3 px-3 cursor-pointer"
          onClick={toggleMute}
        >
          {isMuted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
        </div>
      </div>
      <Nav />
      <audio ref={audioRef} loop autoPlay>
        <source src="/haunted.mp3" type="audio/mp3" />
      </audio>
      <div className="relative">
        <InvitationHero />

        <div className="mt-12 px-4">
          <VisibilitySensor>
            {({ isVisible }) => {
              isVisible ? setVisibleOnce(true) : "";
              return (
                <FadeIn
                  delay={100}
                  visible={isVisible || visibleOnce}
                  transitionDuration={1000}
                >
                  <h4
                    id={`${isVisible || visibleOnce ? "L" : "notL"}`}
                    className="prior-flicker text-2xl md:text-3xl lg:text-4xl text-beige text-center mb-3"
                  >
                    Welcome to...
                  </h4>

                  <h1
                    id={`${isVisible || visibleOnce ? "I" : "notI"}`}
                    className="text-7xl md:text-8xl lg:text-9xl text-accent-default text-center"
                  >
                    The Haunted House
                  </h1>

                  <p
                    id={`${isVisible || visibleOnce ? "I" : "notI"}`}
                    className="text-xl md:text-2xl lg:text-3xl text-center text-beige mt-2"
                  >
                    A 24-hour hackathon for highschoolers in Chicago
                  </p>
                </FadeIn>
              );
            }}
          </VisibilitySensor>

          {/* <ScrollAnimation animateIn="fadeIn" delay={700} duration={1000}>
          <h1 className="text-8xl text-accent-default text-center">
            The Haunted House
          </h1>
        </ScrollAnimation> */}
        </div>
        <div className="mb-12">
          <FadeIn delay={100} visible={visibleOnce} transitionDuration={1000}>
            {" "}
            <CardSection />
          </FadeIn>
        </div>
        <div className="space-y-12">
          <div className="snap-end shrink-0">
            <WhatHackathon />
          </div>
          <div className="snap-center shrink-0">{/* <WhatIsThis /> */}</div>

          <div className="snap-center shrink-0">
            <Satellites />
          </div>

          <Faq />
        </div>
        <Signup bgPlay={play} bgStop={stop} />
        <div className="pb-12">
          <Footer />
        </div>

        <div
          style={{ zIndex: 900 }}
          className="text-center text-md md:text-xl lg:text-2xl text-black w-full px-2 bottom-0 left-0 absolute bg-accent-default py-1 mt-10"
        >
          {/* 👻 Hack the Night Away! Join our Halloween Hackathon for a
          Spooktacular Code Adventure! 🎃 */}
          {/* Where fright meets byte. */}
          Where Fright Meets Byte: A Haunted House Hackathon Experience.
        </div>
      </div>
    </>
  );
}
