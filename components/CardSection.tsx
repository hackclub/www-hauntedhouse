import { DateCard } from "./Cards/Date";
import { Hackers } from "./Cards/Hackers";
import { PlaceCard } from "./Cards/Place";

export const CardSection = () => {
  return (
    <div className="px-6 md:px-8">
      <div className="max-w-9xl space-x-8 flex justify-between">
        <DateCard />
        <PlaceCard />
        <Hackers />
      </div>
    </div>
  );
};
