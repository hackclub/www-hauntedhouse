export const Footer = () => {
  const signatures = [
    "https://cloud-cu81yjslv-hack-club-bot.vercel.app/0screenshot_2023-09-27_at_21.41.40-removebg.png",
    " https://cloud-l6pk2kttc-hack-club-bot.vercel.app/0image.png",
  ];

  return (
    <div className="p-6 lg:p-12 border-t-0 border-accent-default border-dashed">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl  mb-3 text-center tracking-normal text-beige">
          We're gonna have a spooktastic experience—see you there,
        </h3>
        <div className="p-3 md:p-6 lg:p-8 border-beige border rounded-lg border-dashed">
          {signatures.map((sig) => {
            return <img src={sig} className="invert max-h-[80px]" />;
          })}
        </div>
      </div>
    </div>
  );
};
