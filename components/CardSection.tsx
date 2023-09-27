import { DateCard } from "./Cards/Date";
import { Hackers } from "./Cards/Hackers";
import { PlaceCard } from "./Cards/Place";
import { Definition } from "./WhatIsThis/definitionThis";

// pb-12 md:pb-36 lg:pb-72

export const CardSection = () => {
  return (
    <div className="px-6 md:px-8   pt-6 md:pt-8 lg:pt-12 flex-col items-center space-y-8 justify-center bg-[url('/stars.png')] ">
      <div className="max-w-6xl justify-center mx-auto space-x-10 flex items-center w-full scale-[80%]">
        <DateCard />
        <PlaceCard />
        <Hackers />
      </div>

      {/* <div className="max-w-5xl scale-110 mx-auto">
        <Definition />
      </div> */}
    </div>
  );
};
