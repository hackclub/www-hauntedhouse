export const PlaceCard = () => {
  return (
    <div className="overflow-hidden relative rounded-xl bg-strongblue aspect-[2/3] w-full flex flex-col items-center">
      {/* <div className=""> */}

      {/* </div> */}
      {/* 
      <img
        src="/cardimages/bats.png"
        className="w-[64%] top-[10%] left-0 absolute"
      /> */}
      {/* <img
        src="/cardimages/witch.png"
        className="w-[29%] top-[18px] right-[18px] absolute"
      /> */}
      <img
        src="/cardimages/house.png"
        className="absolute -left-[70px] -bottom-[20px] w-[98%]"
      />
      <img
        src="/cardimages/web.png"
        className="absolute -top-[70px] scale-[-1] rotate-90 -right-[15px] w-3/4"
      />

      <h1 className=" text-beige text-8xl mt-[15%] rotate-[15deg] text-center ">
        Downtown
        <br />
        Chicago
      </h1>
      {/* <h1 className="text-beige text-7xl -rotate-[15deg] text-center">28-29</h1> */}
    </div>
  );
};
