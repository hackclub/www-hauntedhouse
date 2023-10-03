import { Definition } from "./HackathonExplain/definition";
import { Projects } from "./HackathonExplain/projects";
import { Vibe } from "./HackathonExplain/vibe";

import { RoomProvider, useOthers, useMyPresence } from "../liveblocks.config";
import { ReactFlashlight } from "react-flashlight";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Cursor from "./Cursor";
import { OuijaBoard } from "./OuijaBoard";

export function useOverrideRoomId(roomId: string) {
  const { query } = useRouter();
  const overrideRoomId = useMemo(() => {
    return query?.roomId ? `${roomId}-${query.roomId}` : roomId;
  }, [query, roomId]);

  return overrideRoomId;
}

export const WhatHackathon = () => {
  const roomId = useOverrideRoomId("ouija-board");

  return (
    <div className="border-t  border-accent-default border-dashed">
      <div className="flex flex-col max-w-[90rem] mx-auto lg:flex-row  divide-x-0 divide-accent-default divide-dashed">
        <div className="p-8 md:p-12  lg:w-[40%]">
          {/* <img src="/cardimages/tape.png" /> */}
          <div className="relative flex flex-wrap pt-10 py-2 px-2  h-full justify-center items-center">
            {/* <img
              src="/stacked1.png"
              className="absolute opacity-0 sm:opacity-100  scale-105 aspect-[83/100] mx-auto my-auto"
            />
            <img
              src="/stacked2.png"
              className="absolute opacity-0 sm:opacity-100 scale-105 aspect-[83/100] mx-auto my-auto"
            /> */}
            <div className=" bg-accent-default pb-4 relative aspect-square w-full border border-accent-darker shadow-2xl max-w-lg mx-auto my-auto p-[30px]">
              <img
                src="/cardimages/tape.webp"
                className="w-[26%] max-w-[7rem] -top-[15%] left-[45%] absolute z-50"
              />
              <div className="overflow-hidden relative">
                <h1 className="pb-4 marker text-2xl lg:text-2xl xl:text-3xl mt-5 relative z-50 font-black text-beige">
                  Flamethrower at{" "}
                  <a
                    href="https://www.youtube.com/watch?v=O1s5HqSqKi0"
                    className="underline"
                  >
                    Outernet
                  </a>
                </h1>
              </div>
              <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <img
                  src="/cardimages/witch.webp"
                  className="absolute z-0 -left-5 -bottom-5 w-[25%]"
                />
              </div>
              <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <img
                  src="/cardimages/web.webp"
                  className="absolute z-0 -right-10  -bottom-10 w-[40%]"
                />
              </div>
            </div>

            <div className=" bg-accent-default pb-4 relative aspect-square w-full border border-accent-darker shadow-2xl max-w-lg mx-auto my-auto p-[30px]">
              <img
                src="/cardimages/tape.webp"
                className="w-[26%] max-w-[7rem] -top-[15%] left-[45%] absolute z-50"
              />
              <div className="overflow-hidden relative">
                <h1 className="pb-4 marker text-2xl lg:text-2xl xl:text-3xl mt-5 relative z-50 font-black text-beige">
                  Flamethrower at{" "}
                  <a
                    href="https://www.youtube.com/watch?v=O1s5HqSqKi0"
                    className="underline"
                  >
                    Outernet
                  </a>
                </h1>
              </div>
              <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <img
                  src="/cardimages/witch.webp"
                  className="absolute z-0 -left-5 -bottom-5 w-[25%]"
                />
              </div>
              <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <img
                  src="/cardimages/web.webp"
                  className="absolute z-0 -right-10  -bottom-10 w-[40%]"
                />
              </div>
            </div>

            <div className=" bg-accent-default pb-4 relative aspect-square w-full border border-accent-darker shadow-2xl max-w-lg mx-auto my-auto p-[30px]">
              <img
                src="/cardimages/tape.webp"
                className="w-[26%] max-w-[7rem] -top-[15%] left-[45%] absolute z-50"
              />
              <div className="overflow-hidden relative">
                <h1 className="pb-4 marker text-2xl lg:text-2xl xl:text-3xl mt-5 relative z-50 font-black text-beige">
                  Flamethrower at{" "}
                  <a
                    href="https://www.youtube.com/watch?v=O1s5HqSqKi0"
                    className="underline"
                  >
                    Outernet
                  </a>
                </h1>
              </div>
              <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <img
                  src="/cardimages/witch.webp"
                  className="absolute z-0 -left-5 -bottom-5 w-[25%]"
                />
              </div>
              <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <img
                  src="/cardimages/web.webp"
                  className="absolute z-0 -right-10  -bottom-10 w-[40%]"
                />
              </div>
            </div>

            <div className=" bg-accent-default pb-4 relative aspect-square w-full border border-accent-darker shadow-2xl max-w-lg mx-auto my-auto p-[30px]">
              <img
                src="/cardimages/tape.webp"
                className="w-[26%] max-w-[7rem] -top-[15%] left-[45%] absolute z-50"
              />
              <div className="overflow-hidden relative">
                <h1 className="pb-4 marker text-2xl lg:text-2xl xl:text-3xl mt-5 relative z-50 font-black text-beige">
                  Flamethrower at{" "}
                  <a
                    href="https://www.youtube.com/watch?v=O1s5HqSqKi0"
                    className="underline"
                  >
                    Outernet
                  </a>
                </h1>
              </div>
              <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <img
                  src="/cardimages/witch.webp"
                  className="absolute z-0 -left-5 -bottom-5 w-[25%]"
                />
              </div>
              <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <img
                  src="/cardimages/web.webp"
                  className="absolute z-0 -right-10  -bottom-10 w-[40%]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-12 w-full lg:w-[60%]">
          <h1 className="text-6xl text-accent-darker mb-6">
            {/* What is a hackathon? */}
            Why Haunted House?
          </h1>
          <div className="space-y-8">
            {/* <Definition /> */}
            <RoomProvider
              id={roomId}
              initialPresence={{
                cursor: null,
                dimensions: null,
                location: null,
              }}
            >
              <OuijaBoard />
            </RoomProvider>
          </div>
        </div>
      </div>
    </div>
  );
};
