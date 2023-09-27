export const Projects = () => {
  return (
    <div className="h-full p-8 bg-beige shadow-accent-default border shadow-[4px_4px_0px_0px_#EB6424] border-solid border-accent-default">
      <div className="mb-4">
        <h3 className="text-3xl text-blackish m-0">Previously @ Hack Club</h3>
        {/* <p className="text-gray-500 text-base m-0">/ˈhakəˌTHän/</p> */}
      </div>

      <div>
        <p className="text-blackish text-xl">
          {/* We love to see crazy projects: from interactive websites to a
          programmed dinosaur flamethrower (yes, it cooked hotdogs for us). This
          weekend, we want your creativity to run wild. We’re not building
          projects to impress businesses–we’re building projects that we love to
          make. */}
          We have run multiple events of this scale around the world. Each one,
          however is special in its own way. The summer of '21, we{" "}
          <a
            href="https://www.youtube.com/watch?v=2BID8_pGuqA"
            className="underline"
          >
            chartered a train across America
          </a>{" "}
          and ran the world's longest hackathon on land. Earlier this year, we
          ran an outdoors do-it-yourself camping adventure in Cabot, Vermont.
          Check it out{" "}
          <a href="TODO:outernet_documentary" className="underline">
            here
          </a>
          !
        </p>
      </div>
    </div>
  );
};
