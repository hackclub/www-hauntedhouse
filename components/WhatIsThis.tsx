import { Definition } from "./WhatIsThis/definitionThis";
import { Projects } from "./WhatIsThis/projectsThis";
import { Vibe } from "./HackathonExplain/vibe";

export const WhatIsThis = () => {
  return (
    <div className="pt-8 md:pt-12 flex flex-col space-y-8 items-center justify-center border-t border-b border-accent-default border-dashed divide-x-0 divide-accent-default divide-dashed">
      <h1 className="text-7xl text-accent-darker text-center mb-6">
        Enter...Haunted House
      </h1>

      <div className="p-8 md:p-12 w-full max-w-4xl">
        <div className="space-y-8">
          <Definition />
          <div className=" h-full space-x-8">
            <div className="w-full">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
