export const Signup = () => {
  return (
    <div>
      <div className="p-8 md:p-12 w-full bg-accent-default z-[99]">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <span className="text-blackish text-6xl text-center">
              It's time to enter...
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex-col flex">
              <label className="text-2xl font-black">Name</label>
              <input
                type="text"
                className="text-lg px-4 py-2 bg-beige text-black placeholder-gray-600 tracking-wide border-2 rounded-lg border-accent-darker "
                placeholder="Ex: Orpheus Smith"
              />
            </div>
            <div className="flex-col flex">
              <label className="text-2xl font-black">Email</label>
              <input
                type="email"
                className="text-lg px-4 py-2 bg-beige text-black placeholder-gray-600 tracking-wide border-2 rounded-lg border-accent-darker "
                placeholder="Ex: orpheus@hackclub.com"
              />
            </div>
            <input
              type="submit"
              value={"Sign Up"}
              className="text-xl hover:cursor-pointer border-accent-darker border-3 rounded-lg bg-blackish text-beige px-4 py-2 w-full hover:bg-beige hover:text-blackish transition ease-in-out duration-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
