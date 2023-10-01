export const Footer = () => {
  const signatures = [
    "https://cloud-cu81yjslv-hack-club-bot.vercel.app/0screenshot_2023-09-27_at_21.41.40-removebg.png",
    "https://cloud-evcib6vi6-hack-club-bot.vercel.app/0signature.svg",
    "https://cloud-hgfhu8yh1-hack-club-bot.vercel.app/0signature.png",
    "https://cloud-kjzxay15x-hack-club-bot.vercel.app/0image.png",
    "https://epoch.hackclub.com/signatures/devenjadhav.png",
  ];

  return (
    <div className="p-6 lg:p-12 border-t-0 border-accent-default border-dashed">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl  mb-3 text-center tracking-normal text-beige">
          We're gonna have a spooktastic experience—see you there,
        </h3>
        <div className="p-3 md:p-6 flex flex-wrap gap-4 justify-center lg:p-8 border-beige border rounded-lg border-dashed">
          {signatures.map((sig, i) => {
            return <img key={i} src={sig} className="invert max-h-[80px]" />;
          })}
        </div>
      </div>
    </div>
  );
};
