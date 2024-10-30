import React from 'react';
import { useState } from'react';
import {PostData } from '../utilities/PostData';
//import { PostButton } from './sideBar';



function Post({ x }) {
  const [showPopup, setShowPopup] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null); // To store the timeout ID

  const handleMouseEnter = () => {
    // Set a timeout to show the popup after 2 seconds
    const id = setTimeout(() => setShowPopup(true), 2000);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    // Clear the timeout if the mouse leaves before 2 seconds
    clearTimeout(timeoutId);
    setShowPopup(false);
  };
    return (
      <div className="flex flex-1 w-full relative  border-y-1  border-[rgb(47,51,54)] border-solid overflow-y-auto max-h-screen  hover:bg-zinc-950">
  
         <div className="relative w-[9%] h-auto">

          <div className=" m-2 w-12 h-12 b-amber-800 rounded-full overflow-hidden"
           onMouseEnter={handleMouseEnter}
          //onMouseLeave={handleMouseLeave}
          >
            <img src={x.userImage} alt="UserImage" className="w-fit" />
          </div>
          
          {showPopup && (
          <div className="flex flex-col abosolute  overflow-visible left-8 top bottom-0 p-2 w-[400px] h-fit bg-black text-white rounded-3xl shadow-lg shadow-slate-200 z-0 ease-in-out"
          onMouseLeave={handleMouseLeave}>
          
            <div className="flex flex-row justify-between items-center ml-1">
              <div className="w-20 h-20 m-2 rounded-full overflow-hidden">
                <img src={x.userImage} alt="user" className="w-fit h-fit" />
              </div>
              
              <button className='border-1 border-[rgb(47,51,54)] border-solid order-last rounded-full w-28 text-lg h-12 m-2  text-center font-bold bg-white text-black'>Follow</button>
       
            </div>
          
        <div className="flex flex-row text-xl  font-bold ml-2">
        <p className=' hover:underline '>{x.name}</p>
        <img src="verify.png" alt="verified" className="w-5 h-5 mt-1 ml-2" />
      </div>
      <p className='text-zinc-400 text-xl ml-2'>{x.username}</p>

      <div className="m-2 text-white text-xl">
        <p>{x.bio}</p> 
        </div>

      <div className='flex flex-row w-full justify-start m-2 gap-4 text-xl font-bold'>
        <p className="text-white flex  flex-row gap-1 ">{x.following}<p className='text-zinc-400 font-normal text-lg'>Following</p></p>
        <p className="text-white flex flex-row gap-1 ">{x.followers}<p className='text-zinc-400 font-normal text-lg'>Followers</p></p>
         </div>

          </div>
        )}

        </div>
  
        <div className=" flex-col w-[91%] h-[100%] b-lime-300">
  
          <div className="role:profile_name mt-2 b-teal-500 w-[100%] h-6 flex justify- gap-2 ">
            <p className="text-xl font-bold h-fit hover:underline">{x.name}</p>
            <img src="verify.png" alt="verified" className="w-5 h-5 mt-1" />
            <p className="text-zinc-400 text-xl">{x.username}</p>
            <p className="text-zinc-400 text-xl">{x.time}</p>
          </div>
  
          <div className="role:message b-teal-700 mt-2 text-lg">
            <p className="">{x.postMessage}</p>
          </div>
  
          <div className="role:Post_Image/Video pt-2  pr-4 w-full h-auto  rounded-lg overflow-hidden">
            {x.postImage === 'NULL' ? (
              <video  controls className="rounded-lg w-fit max-w-[100%] h-auto max-h-[60vh] min-h-[30vh] object-fit border-2 border-[rgb(47,51,54)] border-solid">
                <source src={x.postVideo} type="video/mp4" />
              </video>
            ) : (
              <img src={x.postImage} alt="postImage" className="rounded-2xl w-fit  h-auto max-h-[60vh] border-2 border-[rgb(47,51,54)] border-solid" />
            )}
          </div>
  
          <div className="role: reaction_bar mt-2 flex justify-between mb-1 px-4">
  
            <div className="flex flex-row gap-1 text-zinc-400 hover:text-[rgb(29,155,240)] ">
            <div className="role:reply hover:rounded-full text-zinc-400
            hover:bg-[rgb(29,155,240)] hover:bg-opacity-10  ">
              <span className="material-symbols-outlined  hover:text-[rgb(29,155,240)] fill-none p-2"> quick_phrases </span>
            </div>
              <div className='text-lg mt-1 -ml-2'>{x.reply}</div>
              </div>  
           
              <div className="flex flex-row gap-1 text-zinc-400 hover:text-green-400 ">
            <div className="role:repost hover:rounded-full text-zinc-400
            hover:bg-green-400 hover:bg-opacity-10  hover:text-green-400">
              <span className="material-symbols-outlined text-zinc-400 hover:text-green-400 fill-none p-2"> cycle </span>
            </div>
            <div className='text-lg mt-1 -ml-2'>{x.repost}</div>
            </div>
           

            <div className="flex flex-row gap-1 text-zinc-400 hover:text-pink-500 ">
            <div className="role: like hover:rounded-full text-zinc-400
            hover:bg-pink-500 hover:bg-opacity-10  hover:text-pink-500">
              <span className="material-symbols-outlined text-zinc-400 hover:text-pink-500 fill-0 p-2"> favorite </span>
            </div>
            <div className='text-lg mt-1 -ml-2 hover:'>{x.like}</div>
            </div>

           <div className="flex flex-row gap-1 text-zinc-400 hover:text-[rgb(29,155,240)] ">
            <div className="role: view hover:rounded-full text-zinc-400
            hover:bg-[rgb(29,155,240)] hover:bg-opacity-10  hover:text-[rgb(29,155,240)]">
              <span className="material-symbols-outlined text-zinc-400 hover:text-[rgb(29,155,240)] fill-none p-2"> signal_cellular_alt </span>
            </div>
            <div className='text-lg mt-1 -ml-2'>{x.views}</div>
            </div>

            <div className="flex flex-row gap-1 text-zinc-400 hover:text-[rgb(29,155,240)] ">
            <div className="role: bookmark hover:rounded-full text-zinc-400
            hover:bg-[rgb(29,155,240)] hover:bg-opacity-10  hover:text-[rgb(29,155,240)]">
              <span className="material-symbols-outlined text-zinc-400 hover:text-[rgb(29,155,240)] fill-none p-2"> bookmark </span>
            </div>
            <div className='text-lg mt-1 -ml-2'></div>
           </div>

           <div className="flex flex-row gap-1 text-zinc-400 hover:text-[rgb(29,155,240)] ">
            <div className="role: share  hover:rounded-full text-zinc-400
            hover:bg-[rgb(29,155,240)] hover:bg-opacity-10  hover:text-[rgb(29,155,240)]">
              <span className="material-symbols-outlined fill-none p-2"> upload </span>
            </div>
            <div className='text-lg mt-1 -ml-2'></div>
           </div>

          </div>
  
  
          </div>
  
  
      </div>
  
    )
  }
  
  



  export function PostList() {
    return (
      <div className="relative">
        {PostData.map((x) => (
          <div key={x.id} className='relative '>
            <Post x={x} />
          </div>
        ))}
      </div>
    )
  }
  
export function FeedHeader(){
  return(
     <div className='sticky z-10 top-0 w-full h-[70px] flex  justify-around  border-y-1 border-[rgb(47,51,54)]  bg-black bg-opacity-80 backdrop-blur-md text-white'>
      <div className=" flex-col text-xl content-center justify-center hover:bg-zinc-900 w-[50%] text-center font-bold blur-none">
         <p>For you</p>
         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/5  h-1 bg-[rgb(29,155,240)] rounded"></div>
      </div>
      <div className=" text-lg content-center w-[50%] text-center hover:bg-zinc-900  font-bold text-zinc-400">
     Following
      </div>
          
     </div>


  )
}




export function UserPost({ UserData }) {
  const [inputText, setInputText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
    setInputText(e.target.value); 
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="border-y border-[rgb(47,51,54)] flex flex-row w-full p-2">
      <div className="w-14 h-14 m-2 rounded-full overflow-hidden">
        <img src={UserData.userImage} alt="user" className="w-full h-full" />
      </div>

      <div className="flex flex-col w-full gap-3">
        <textarea
          placeholder="What is happening?"
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows="1"
          className="mt-4 outline-none w-full bg-black text-2xl resize-none text-white"
          style={{ overflowY: "hidden", maxHeight: "200px" }}
        />

        {isFocused && (
          <>
          <div className="flex items-center text-[rgb(29,155,240)] font-bold text-lg mt-2 gap-2">
            <span className="material-symbols-outlined">globe_asia</span>
            <span>Everyone can reply</span>
          </div>
          <div className="border-b border-[rgb(47,51,54)] w-full mt-2"></div>
          </>
          
        )}

        <div className="flex flex-row items-center justify-between w-full text-[rgb(29,155,240)] mt-0">

          <div className="flex gap-4 ">
            <span className="material-symbols-outlined text-2xl font-bold">image</span>
            <span className="material-symbols-outlined text-2xl font-bold">gif_box</span>
            <span className="material-symbols-outlined text-2xl font-bold">ballot</span>
            <span className="material-symbols-outlined text-2xl font-bold">mood</span>
            <span class="material-symbols-outlined text-2xl font-bold">edit_calendar</span>
            <span className="material-symbols-outlined text-2xl font-bold">location_on</span>
          </div>

          <button
            className={`text-white px-5 py-2 text-xl  rounded-full font-semibold  ${
              inputText.trim() ? "bg-[rgb(29,155,240)]" : "bg-[rgb(15,78,120)] cursor-not-allowed"
            }`}
            disabled={!inputText.trim()}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}



  