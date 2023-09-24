import { CardSection } from "@/components/CardSection";
import { InvitationHero } from "@/components/InvitationHero";
import { Satellites } from "@/components/Satellites";
import { WhatHackathon } from "@/components/WhatHackathon";
import { WhatIsThis } from "@/components/WhatIsThis";
import dynamic from "next/dynamic";
import { useState } from "react";
// import AnimatedCursor from "react-animated-cursor";
import FadeIn from "react-fade-in/lib/FadeIn";
import VisibilitySensor from "react-visibility-sensor";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Invitation() {
  const [visibleOnce, setVisibleOnce] = useState(false);
  return (
    <div>
      <InvitationHero />

      <div className="">
        <VisibilitySensor>
          {({ isVisible }) => {
            isVisible ? setVisibleOnce(true) : "";
            return (
              <FadeIn
                delay={500}
                visible={isVisible || visibleOnce}
                transitionDuration={1000}
              >
                <h4
                  id="L"
                  className="prior-flicker text-5xl text-gray-300 text-center mb-3"
                >
                  Welcome to...
                </h4>

                <h1 id="I" className="text-9xl text-accent-default text-center">
                  The Haunted House
                </h1>
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
        <CardSection />
      </div>
      <div className="h-screen">
        <div className="snap-end shrink-0">
          <WhatHackathon />
        </div>
        <div className="snap-center shrink-0">
          <WhatIsThis />
        </div>

        <div className="snap-center shrink-0">
          <Satellites />
        </div>
      </div>
    </div>
  );
}
