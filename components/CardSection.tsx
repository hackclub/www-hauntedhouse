import { DateCard } from "./Cards/Date";
import { Hackers } from "./Cards/Hackers";
import { PlaceCard } from "./Cards/Place";
import { Definition } from "./WhatIsThis/definitionThis";

export const CardSection = () => {
  return (
    <div className="px-6 md:px-8 py-12 md:py-36 lg:py-72 flex-col items-center space-y-16 justify-center bg-[url('/stars.png')] ">
      <div className="max-w-6xl justify-center mx-auto space-x-8 flex items-center w-full">
        <DateCard />
        <PlaceCard />
        <Hackers />
      </div>

      <div className="max-w-5xl mx-auto">
        <Definition />
      </div>
    </div>
  );
};
