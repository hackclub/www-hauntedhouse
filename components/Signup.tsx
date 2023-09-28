export const Signup = () => {
  return (
    <div>
      <div className="p-8 md:p-12 w-full z-[99]">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <span className="text-accent-default text-5xl md:text-6xl text-center">
              It's time to enter...
            </span>
          </div>
          <div className="space-y-5" id="signup">
            <div className="flex-col flex space-y-1">
              <label className="text-2xl font-black text-beige">Email</label>
              <input
                type="email"
                className="text-xl px-4 py-2 bg-beige text-blackish placeholder-gray-500 tracking-wide border-2 rounded-lg border-accent-darker "
                placeholder="Ex: orpheus@hackclub.com"
              />
            </div>
            <div className="flex-col flex space-y-1">
              <label className="text-2xl font-black text-beige">Name</label>
              <input
                type="text"
                className="text-xl px-4 py-2 bg-beige text-blackish placeholder-gray-500 tracking-wide border-2 rounded-lg border-accent-darker "
                placeholder="Ex: Orpheus Smith"
              />
            </div>

            <div className="flex-col flex space-y-1">
              <label className="text-2xl font-black text-beige">Age</label>
              <input
                type="number"
                className="text-xl px-4 py-2 bg-beige text-blackish placeholder-gray-500 tracking-wide border-2 rounded-lg border-accent-darker "
                placeholder="Ex: 16"
              />
            </div>
            <input
              type="submit"
              value={"Sign Up"}
              className="text-xl hover:cursor-pointer border-accent-darker border-3 rounded-lg  bg-accent-default text-beige px-4 py-2 w-full hover:bg-beige hover:text-accent-default transition ease-in-out duration-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
