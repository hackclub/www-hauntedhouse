export const Footer = () => {
  const signatures = [
    {
      sig: "https://cloud-cu81yjslv-hack-club-bot.vercel.app/0screenshot_2023-09-27_at_21.41.40-removebg.png",
      link: "https://github.com/shubhampatilsd",
    },

    {
      sig: "https://cloud-evcib6vi6-hack-club-bot.vercel.app/0signature.svg",
      link: "https://github.com/zoya-hussain",
    },
    {
      sig: "https://cloud-hgfhu8yh1-hack-club-bot.vercel.app/0signature.png",
      link: "https://github.com/ivoinestrachan",
    },
    {
      sig: "https://cloud-kjzxay15x-hack-club-bot.vercel.app/0image.png",
      link: "https://github.com/faisalsayed10",
    },
    {
      sig: "https://epoch.hackclub.com/signatures/devenjadhav.png",
      link: "https://github.com/devenjadhav",
    },
    {
      sig: "https://cloud-ni62444df-hack-club-bot.vercel.app/0pavani.png",
      link: "https://www.instagram.com/enchanting.hues/",
      pavani: true,
    },
  ];

  return (
    <div className="mb-2 p-6 lg:p-12 border-t-0 border-accent-default border-dashed">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl  mb-3 text-center tracking-normal text-beige">
          We're gonna have a spooktastic experience—see you there,
        </h3>
        <div className="p-3 md:p-6 flex flex-wrap gap-4 justify-center lg:p-8 border-beige border rounded-lg border-dashed">
          {signatures.map((sig, i) => {
            return (
              <a key={i} href={sig.link} target="_blank">
                <img
                  key={i}
                  src={sig.sig}
                  className={`invert ${
                    sig.pavani ? "max-h-[120px] ml-2" : "max-h-[80px]"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
