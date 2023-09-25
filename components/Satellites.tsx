import { Definition } from "./Satellites/definitionThis";
import { Projects } from "./Satellites/projectsThis";
import { Vibe } from "./Satellites/vibeThis";

export const Satellites = () => {
  return (
    <div className="flex flex-col md:flex-row border-t  border-accent-default border-dashed divide-x divide-accent-default divide-dashed">
      <div className="p-8 md:p-12 w-1/2">
        <h1 className="text-6xl text-accent-darker mb-6">
          Don't live in Chicago?
        </h1>
        <div className="space-y-8">
          <Definition />
          <div className="flex h-full space-x-8">
            <div className="w-full">
              <Projects />
            </div>
            {/* <div className="w-1/2"><Vibe /></div> */}
          </div>
        </div>
      </div>
      <div className="p-8 md:p-12 w-1/2 flex justify-center items-center">
        <img src="/map.png" />
      </div>
    </div>
  );
};
