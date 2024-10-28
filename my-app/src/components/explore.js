import { TrendingData } from "../utilities/TrendingData";
import { useState } from "react";

// Trending Component
function Trending({ x }) {
  return (
    <div className="flex flex-col w-[90%] h-auto mt-4 border border-[rgb(47,51,54)]  rounded-2xl">
      <div className="p-3">
        <p className="text-white font-bold text-2xl pl-3 mt-3">What's happening</p>
      </div>

      <div className="flex flex-row w-full h-[60px] mt-6 hover:bg-zinc-950">
        <div className="w-[25%] pl-6 min-w-[68px] max-w-[96px] min-h-[68px] max-h-[96px] rounded-2xl overflow-hidden">
          <img src="t1.jpg" alt="post" className="w-full h-full object-cover rounded-2xl" />
        </div>

        <div className="flex flex-col ml-2">
          <p className="text-white font-bold text-xl">The Offseason</p>
          <p className="text-zinc-400">Event . LIVE</p>
        </div>
      </div>

      <div className="flex flex-col mt-4 mb-4">
        {x.map((i) => (
          <div key={i.id} className="flex flex-row justify-between items-center mt-1 hover:bg-zinc-950 p-3">
            <div className="pl-3">
              <p className="text-zinc-400">{i.genre}</p>
              <p className="text-white font-bold text-xl">{i.tag}</p>
              <p className="text-zinc-400">{i.posts}</p>
            </div>
            <div className="flex items-center">
              <span className="material-symbols-outlined mr-4 text-3xl text-zinc-400 hover:text-[rgb(28,148,229)]">more_horiz</span>
            </div>
          </div>
        ))}
      </div>

      <div className=" mb-0 ">
        <div className="text-[rgb(28,148,229)] text-xl hover:bg-zinc-950 p-3 pb-6 rounded-b-2xl">
          <div className="pl-3">
            <button>Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Follow Component
function Follow() {
  const suggestions = [
    { id: 1, name: "John Doe", username: "@johndoe" },
    { id: 2, name: "Jane Smith", username: "@janesmith" },
    { id: 3, name: "TechWorld", username: "@techworld" },
  ];

  return (
    <div className="flex flex-col w-[90%] h-auto mt-4 border border-[rgb(47,51,54)] rounded-2xl p-3">
      <p className="text-white font-bold text-2xl">Who to follow</p>
      {suggestions.map((user) => (
        <div key={user.id} className="flex items-center justify-between mt-3 hover:bg-zinc-950 p-2 rounded-lg">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="default-avatar.jpg" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="ml-3">
              <p className="text-white font-bold">{user.name}</p>
              <p className="text-zinc-400">{user.username}</p>
            </div>
          </div>
          <button className="text-[rgb(28,148,229)] font-semibold">Follow</button>
        </div>
      ))}
    </div>
  );
}

// Info Component
function Info() {
    return (
      <div className="grid grid-cols-4 w-[90%] h-fit mt-4 text-zinc-500 p-3 gap-y-2">
        {/* Row 1 with 3 columns */}
        <p className="hover:underline ">Terms of Service</p>
        <p className="hover:underline">Privacy Policy</p>
        <p className="hover:underline col-span-2">Cookie Policy</p>
        
        {/* Row 2 with 4 columns */}
        <p className="hover:underline">Accessibility</p>
        <p className="hover:underline">Ads info</p>
        <p className="hover:underline">More</p>
        <p className="">© 2024 X Corp.</p>
      </div>
    );
  }
  

// Explore Component
export  function Explore_X() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (

    <>
      <div className="role:searchBar ml-5 sticky top-0 w-[90%] h-[70px] bg-black">
        <input
          placeholder="Search"
          className="w-full h-[80%] rounded-full text-xl mt-2  bg-[rgb(32,35,39)] text-white px-4 focus:outline-blue-500 "
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          
        />
        {/* Search Results Pop-up */}
        {searchFocused && (
          <div className="absolute top-[70px] w-full min-h-[120px] bg-black p-3 rounded-xl shadow-lg  shadow-slate-200 z-0 ease-in-out ">
            <p className="text-zinc-500 text-xl text-center mt-2">Try searching for people, lists, or keywords</p>
          </div>
        )}
      </div>

      <div className="flex flex-col w-full h-full overflow-y-auto ml-5">
     {/* Search Bar */}

      <Trending x={TrendingData} />
      <Follow />
      <Info />
    </div>
    </>
    
  );
}
