export const Definition = () => {
  return (
    <div className="p-6 xl:p-8 bg-black shadow-accent-default border shadow-[4px_4px_0px_0px_#EB6424] border-solid border-accent-default">
      <div className="mb-4">
        <h3 className="text-2xl xl:text-3xl text-beige m-0">
          Drive Up. Get Reimbursed For Your Gas.
        </h3>
        <p className="text-orange-300 text-base m-1">
          As far as the cars go...
        </p>
      </div>

      <div>
        <p className="text-beige text-lg xl:text-xl">
          To get up to Haunted House, we'll be covering the cost of gas for you
          (or a parent) to drive to Chicago. We'll alternatively reimburse you
          the equivalent of that if you buy a train or bus ticket. Learn more{" "}
          <a href="https://gas.hackclub.com/" className="underline">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};
