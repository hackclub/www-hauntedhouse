import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { RoomProvider } from "../liveblocks.config";
import { OuijaBoard } from "./OuijaBoard";

const NotesBoard = dynamic(import("./NotesBoard"));

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
      <div className="flex flex-col max-w-[90rem] mx-auto divide-x-0 divide-accent-default divide-dashed">
        <div className="p-8 md:p-12">
          <h1 className="text-5xl mb-20 lg:text-7xl text-center text-accent-darker">
          What Happens in the House, Creates the House
          </h1>
          <NotesBoard />
          {/* <div className="w-full px-8 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:flex flex-wrap lg:flex-nowrap gap-16  lg:gap-8 max-w-6xl mx-auto bg-[url('/corkboard.webp')] bg-cover py-10 border-[15px] border-[#E8E0CC]">
            <div className="bg-[#E8E0CC] bg-[url('/mapbg.png')] w-full max-w-[20rem] h-full relative aspect-square  shadow-2xl mx-auto my-auto p-[30px] ml-10">
              <img
                src="/cardimages/tape.webp"
                className="w-[26%] max-w-[7rem] -top-[20%] left-[45%] absolute z-50"
              />
              <div className="overflow-hidden relative">
                <h1 className="pb-4 notes text-2xl lg:text-2xl xl:text-3xl mt-5 relative z-50 font-black text-black">
                  1. Come up with an idea
                </h1>
              </div>
            </div>

            <div className="bg-[#E8E0CC]  bg-[url('/mapbg.png')] w-full max-w-[20rem] h-full relative aspect-square  shadow-2xl mx-auto my-auto p-[30px]">
              <img
                src="/cardimages/tape.webp"
                className="w-[26%] max-w-[7rem] -top-[20%] left-[45%] absolute z-50"
              />
              <div className="overflow-hidden relative">
                <h1 className="pb-4 notes text-2xl lg:text-2xl xl:text-3xl mt-5 relative z-50 font-black text-black">
                  2. Form a team
                </h1>
              </div>
            </div>

            <div className="bg-[#E8E0CC] bg-[url('/mapbg.png')] w-full max-w-[20rem] h-full relative aspect-square  shadow-2xl mx-auto my-auto p-[30px]">
              <img
                src="/cardimages/tape.webp"
                className="w-[26%] max-w-[7rem] -top-[20%] left-[45%] absolute z-50"
              />
              <div className="overflow-hidden relative">
                <h1 className="pb-4 notes text-2xl lg:text-2xl xl:text-3xl mt-5 relative z-50 font-black text-black">
                  3. Build and learn
                </h1>
              </div>
            </div>

            <div className="bg-[#E8E0CC]  bg-[url('/mapbg.png')] w-full max-w-[20rem] h-full relative aspect-square  shadow-2xl mx-auto my-auto p-[30px] mr-10">
              <img
                src="/cardimages/tape.webp"
                className="w-[26%] max-w-[7rem] -top-[20%] left-[45%] absolute z-50"
              />
              <div className="overflow-hidden relative">
                <h1 className="pb-4 notes text-2xl lg:text-2xl xl:text-3xl mt-5 relative z-50 font-black text-black">
                  4. Show off what you made
                </h1>
              </div>
            </div>
          </div> */}
        </div>
        <div className="p-8 md:p-12 w-full">
          <div className="space-y-8 max-w-3xl mx-auto">
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
