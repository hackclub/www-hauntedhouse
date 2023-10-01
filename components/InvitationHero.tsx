import { BsChevronDoubleDown } from "react-icons/bs";

export const InvitationHero = () => {
  return (
    <div className="bg-[url('/alleyway-background-compressed.webp')] bg-left-top w-screen h-screen justify-center flex flex-col relative items-center">
      <div className="px-6 w-[80%] max-w-5xl">
        <button className="card relative aspect-[1421/904] h-auto w-full  mx-auto">
          <img
            src="/quainthouse.webp"
            className={`card-side front shadow-2xl shadow-red-500  border-[0.8rem]   transition border-white`}
          />
          <img
            src="/smallerpostcard.webp"
            className={`card-side back shadow-2xl shadow-red-500  border-[0.8rem]   transition border-white`}
          />
        </button>
      </div>

      {/* <h1 className="text-7xl  text-accent-default">The Haunted House</h1> */}
      <div className="pointer-events-none fixed bg-gradient-to-b from-transparent from-80% md:from-80% z-[99] to-black w-full h-full"></div>
      <div className="pointer-events-none flex justify-center bg-gradient-to-b from-transparent h-[30%] absolute bottom-0 from-0% z-[99] to-black w-full">
        <BsChevronDoubleDown
          style={
            {
              // zIndex: 60,
            }
          }
          className="text-beige  animate-bounce absolute bottom-10"
          size={40}
        />
      </div>

      {/* <div class=""></div> */}
    </div>
  );
};
