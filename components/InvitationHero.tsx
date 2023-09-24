export const InvitationHero = () => {
  return (
    <div className="w-screen h-screen justify-center flex flex-col items-center">
      <div className="px-6 w-[80%] max-w-5xl">
        <button className="card relative aspect-[1421/904] h-auto w-full  mx-auto">
          <img
            src="/quainthouse.png"
            className={`card-side front   border-[0.8rem]   transition border-white`}
          />
          <img
            src="/postcard.svg"
            className={`card-side back   border-[0.8rem]   transition border-white`}
          />
        </button>
      </div>
      {/* <h1 className="text-7xl  text-accent-default">The Haunted House</h1> */}
    </div>
  );
};
