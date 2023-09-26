import { Definition } from "./HackathonExplain/definition";
import { Projects } from "./HackathonExplain/projects";
import { Vibe } from "./HackathonExplain/vibe";

export const WhatHackathon = () => {
  return (
    <div className="flex flex-col md:flex-row border-t  border-accent-default border-dashed divide-x divide-accent-default divide-dashed">
      <div className="p-8 md:p-12 w-1/2">
        {/* <img src="/cardimages/tape.png" /> */}
        <div className="relative pt-10 flex flex-col h-full justify-center items-center">
          <img
            src="/stacked1.png"
            className="absolute scale-105 aspect-[83/100] mx-auto my-auto"
          />
          <img
            src="/stacked2.png"
            className="absolute scale-105 aspect-[83/100] mx-auto my-auto"
          />
          <div className=" bg-accent-default  relative aspect-[83/100] w-[85%] max-w-lg mx-auto my-auto p-[30px]">
            <img
              src="/cardimages/tape.png"
              className="w-[26%] max-w-[7rem] -top-[15%] left-[45%] absolute z-50"
            />
            <div className="overflow-hidden relative">
              <div
                className={` bg-[url('/outernet-127.png')] bg-center bg-cover aspect-[94/100] w-full`}
              />

              <h1 className="marker text-3xl mt-5 relative z-50 font-black text-beige">
                Flamethrower at{" "}
                <a href="https://outernet.hackclub.com" className="underline">
                  Outernet
                </a>
              </h1>
            </div>
            <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
              <img
                src="/cardimages/witch.png"
                className="absolute z-0 -left-5 -bottom-5 w-[25%]"
              />
            </div>
            <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
              <img
                src="/cardimages/web.png"
                className="absolute z-0 -right-10  -bottom-10 w-[40%]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 md:p-12 w-1/2">
        <h1 className="text-6xl text-accent-darker mb-6">
          What is a hackathon?
        </h1>
        <div className="space-y-8">
          <Definition />
          <div className="flex h-full space-x-8">
            <div className="w-1/2">
              <Projects />
            </div>
            <div className="w-1/2">
              <Vibe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
