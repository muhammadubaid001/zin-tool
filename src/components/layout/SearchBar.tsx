export const SearchBar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-3.5">
      <div className="h-12 w-36">
        <img alt="logo" src="/logo.png" className="h-full w-full" />
      </div>
      <div className="hidden md:block relative bg-gray-100 rounded-full w-[500px] p-3.5">
        <input
          type="text"
          placeholder="Search for Movies, TV Shows, Themes & Cast"
          className="w-96 px-3 bg-transparent focus:outline-none focus:ring-0 focus:border-0"
        />
        <div className="absolute right-4 top-3.5 border-l pl-3 border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-500 font-HarmonyM">Login</button>
        <button className="bg-primary rounded-full px-4 py-2 text-gray-50">
          Sign up
        </button>
      </div>
    </div>
  );
};
