import { useState } from "react";
import { TrendingData } from "../utilities/TrendingData";
import { PostData } from "../utilities/PostData";
import Search from "./search.js";


// Trending Component
function Trending({ x }) {
  return (
    <div className="flex flex-col w-[90%] h-auto mt-4 border border-[rgb(47,51,54)]  rounded-2xl">
      <div className="p-3 pt-1">
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
function FollowList({ x }) {
  const [showPopup, setShowPopup] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => setShowPopup(true), 500);
    setTimeoutId(id);
  };


  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setShowPopup(false);
  };

  return (
    <div className="relative overflow-visible z-4">
      <div className="flex flex-row items-center justify-between w-full ml-1">
        <div
          className="flex items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-14 h-14 rounded-full overflow-hidden mr-3">
            <img src={x.userImage} alt="user" className="w-fit h-fit" />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row items-center text-xl font-bold">
              <p className="hover:underline">{x.name}</p>
              <img src="verify.png" alt="verified" className="w-5 h-5 ml-2" />
            </div>
            <p className="text-zinc-400 text-lg">{x.username}</p>
          </div>
        </div>

        <button className="border mr-2 rounded-full w-24 text-lg h-10 text-center font-bold bg-white text-black">
          Follow
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="absolute -left-36 mt-2 p-4 w-[300px] h-fit bg-black text-white rounded-2xl shadow-lg shadow-slate-200 z-10 ease-in-ou "
          style={{ top: "100%" }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row justify-between items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src={x.userImage} alt="user" className="w-full h-full" />
            </div>
            <button className="border rounded-full w-28 text-lg h-10 font-bold bg-white text-black">
              Follow
            </button>
          </div>

          <div className="text-xl font-bold mt-2">
          <div className="flex flex-row items-center text-xl font-bold">
              <p className="hover:underline">{x.name}</p>
              <img src="verify.png" alt="verified" className="w-5 h-5 ml-2" />
            </div>
            <p className="text-zinc-400 font-normal">{x.username}</p>
          </div>

          <div className="m-2 text-white text-xl">
        <p>{x.bio}</p> 
        </div>

      <div className='flex flex-row w-full justify-start m-2 mt-3 gap-4 text-xl font-bold'>
        <p className="text-white flex  flex-row gap-1 ">{x.following}<p className='text-zinc-400 font-normal text-lg'>Following</p></p>
        <p className="text-white flex flex-row gap-1 ">{x.followers}<p className='text-zinc-400 font-normal text-lg'>Followers</p></p>
         </div>

        </div>
      )}
    </div>
  );
}



function Follow({ PostData }) {
  return (
    <div className="flex flex-col w-[90%] h-auto mt-4 border border-[rgb(47,51,54)] rounded-2xl p-3 pt-1">
      <p className="text-white font-bold text-2xl pl-3 mt-3">Who to follow</p>
    <div className="mt-3">
      {PostData.filter((i) => i.follow === "True").map((i) => (
        <div key={i.id} className="mt-1 p-3">
          <FollowList x={i} />
        </div>
      ))}
    </div>
       <div className="text-[rgb(28,148,229)] text-xl hover:bg-zinc-950 p-3 pb-6 rounded-b-2xl">
          <div className="pl-3">
            <button>Show more</button>
          </div>
        </div>
    </div>
  );
}





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
  
function Premium(){
     return(
      <div className="flex flex-col w-[90%] h-auto mt-3 border border-[rgb(47,51,54)] rounded-2xl ">
       <div className="p-3 pt-1">
        <div className="">
        <p className="text-white font-bold text-2xl pl-3 mt-3">Subscribe to Premium</p>
       </div>
       <div className="">
        <p className="text-white  text-lg pl-3 mt-3">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
       </div>
       <div className="pl-3">
        <button className="text-white font-bold text-xl  mt-3  rounded-full w-fit px-6  h-12 text-center  bg-[rgb(29,155,240)]">Subscribe</button>
       </div>
     </div>
    
 
    </div>
     )
}



// Explore Component
export  function ExploreX() {


  return (

    <>
      <Search/>
      <div className="flex flex-col w-full h-full overflow-y-auto ml-5">
     {/* Search Bar */}      
      <Premium/>
      <Trending x={TrendingData} />
      <Follow PostData={PostData} />
      <Info />
    </div>
    </>
    
  );
}
