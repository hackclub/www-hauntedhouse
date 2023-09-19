export const DateCard = () => {
  return (
    <div className="overflow-hidden relative rounded-xl bg-accent-default aspect-[2/3] w-full flex flex-col justify-center items-center">
      {/* <div className=""> */}

      {/* </div> */}

      <img
        src="/cardimages/bats.png"
        className="w-[64%] top-[10%] left-0 absolute"
      />
      <img
        src="/cardimages/witch.png"
        className="w-[29%] top-[18px] right-[18px] absolute"
      />
      <img
        src="/cardimages/cat.png"
        className="absolute left-2 bottom-0 w-[35%]"
      />
      <img
        src="/cardimages/web.png"
        className="absolute -bottom-10 -right-[15px] w-3/4"
      />

      <h1 className=" text-beige text-8xl -rotate-[15deg] text-center ">
        October
        <br />
        28-29
      </h1>
      {/* <h1 className="text-beige text-7xl -rotate-[15deg] text-center">28-29</h1> */}
    </div>
  );
};
