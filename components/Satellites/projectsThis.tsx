export const Projects = () => {
  return (
    <div className="h-full p-8 bg-black shadow-accent-default border shadow-[4px_4px_0px_0px_#EB6424] border-solid border-accent-default">
      <div className="mb-4">
        <h3 className="text-2xl xl:text-3xl text-beige m-0">
          Look For Satellite Events Near You
        </h3>
        {/* <p className="text-gray-500 text-base m-0">/ˈhakəˌTHän/</p> */}
      </div>

      <div>
        <p className="text-beige text-lg xl:text-xl">
          In a few cities around you, there might be a satellite event happening
          (local "branches" of Haunted House if you may). We currently have{" "}
          <a
            href="https://tally.so/r/mVP17N
"
            className="underline"
          >
            #haunted-house-toronto
          </a>{" "}
          and{" "}
          <a
            href="https://hackclub.slack.com/archives/C061TFSQDFC"
            className="underline"
          >
            #haunted-house-bayarea
          </a>{" "}
          lined up. Check out{" "}
          <span className="underline">
            <a href="https://hackclub.slack.com/archives/C0601NQJ278">
              #hauntedhouse-satellites
            </a>
          </span>{" "}
          on the{" "}
          <a
            href="https://hackclub.com/slack?event=hauntedhouse-event"
            className="underline"
          >
            Slack
          </a>{" "}
          and{" "}
          <a href="https://hackathons.hackclub.com" className="underline">
            hackathons.hackclub.com
          </a>{" "}
          to see if there are any Haunted House satellite events happening in
          your area.
        </p>
      </div>
    </div>
  );
};
