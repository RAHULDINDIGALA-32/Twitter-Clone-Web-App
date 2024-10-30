import React from 'react'
import { UserData} from '../utilities/PostData.js';
import { useState, useEffect } from 'react';

function ProfileBar({ UserData }) {
  return (

    <div className=' mt-16 p-3 py-1 w-60 overflow-auto mb-4-2   ml-1 flex  space-x-2 font-bold hover:bg-zinc-700 hover:rounded-full on hover:font-bold  '>
      <div className=' w-12 h-12 mt-1 rounded-full overflow-hidden'>
        <img src={UserData.userImage} alt='user' className='w-fit ' />
      </div>
      <div className="text-xl">
        <p>{UserData.name}</p>
        <p className='text-zinc-400'>{UserData.userName}</p>
      </div>
      <div className="">
        <span class="material-symbols-outlined absolute mr-2 ml-4 text-3xl pt-2">
          more_horiz </span>
      </div>

    </div>


  )
}



export function UserPost({ UserData, closePopup }) {
  const [inputText, setInputText] = useState("");
  const { userImage = "" } = UserData || {};

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
    setInputText(e.target.value);
  };

  return (
    <div className="relative flex flex-col justify-start w-full mx-auto bg-black text-white rounded-3xl shadow-lg">
      <div className="flex justify-between items-center w-full mt-2 ml-3 mr-3">
        <div className="flex flex-row justify-center items-center text-center w-10 h-10 hover:rounded-full hover:bg-zinc-800">
          <button onClick={closePopup} className="text-white text-center text-4xl pb-2">
            x
          </button>
        </div>
        <button className="text-[rgb(29,155,240)] font-bold text-xl mr-10">
          Drafts
        </button>
      </div>

      <div className="flex flex-col w-full p-2 m-2 mt-2">
        <div className="flex flex-row">
          <div className="w-14 h-14 m-2 rounded-full overflow-hidden">
            <img src={userImage} alt="user" className="w-fit h-fit" />
          </div>

          <div className="flex flex-col w-full gap-3">
            <textarea
              placeholder="What is happening?"
              onInput={handleInput}
              rows="1"
              className="mt-4 outline-none w-full bg-black text-2xl min-h-[100px] resize-none text-white"
              style={{ overflowY: "hidden", maxHeight: "200px" }}
            />
          </div>
        </div>

        <div className="">
          <div className="flex items-center text-[rgb(29,155,240)] font-bold text-lg mt-2 gap-2">
            <span className="material-symbols-outlined">globe_asia</span>
            <span>Everyone can reply</span>
          </div>
          <div className="border-b border-[rgb(47,51,54)] w-[99%] mt-2"></div>

          <div className="flex flex-row items-center justify-between w-full text-[rgb(29,155,240)] mt-2">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-2xl font-bold">image</span>
              <span className="material-symbols-outlined text-2xl font-bold">gif_box</span>
              <span className="material-symbols-outlined text-2xl font-bold">ballot</span>
              <span className="material-symbols-outlined text-2xl font-bold">mood</span>
              <span className="material-symbols-outlined text-2xl font-bold">edit_calendar</span>
              <span className="material-symbols-outlined text-2xl font-bold">location_on</span>
            </div>

            <button
              className={`text-white px-5 py-2 text-xl mr-4 rounded-full font-semibold ${
                inputText.trim() ? "bg-[rgb(29,155,240)]" : "bg-[rgb(15,78,120)] cursor-not-allowed"
              }`}
              disabled={!inputText.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component to handle popup visibility
export function PostButton({ UserData }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable background scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup in case of component unmount
    };
  }, [isPopupOpen]);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <button
        onClick={openPopup}
        className="text-white bg-[rgb(29,155,240)] px-6 py-3 text-xl rounded-full font-semibold"
      >
        Post
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-[rgb(36,45,52)] bg-opacity-80">
          <div className="fixed top-12 max-w-[755px] w-full">
            <UserPost UserData={UserData} closePopup={closePopup} />
          </div>
        </div>
      )}
    </>
  );
}




export function SideBar() {
  return (
    <div className=' ml-40 mt-3 text=white w-80 h-100vh overflow-y-hidden flex flex-col overflow-x-auto '>

      <div className="w-14 h-14 mt-1 hover:rounded-full hover:bg-zinc-800 hower:w-fit hover:borer-2">
        <img src="x logo.png" alt="x logo" />
      </div>


      <ul className=' flex flex-col  p-1 '>

        <li className='m-1 ml-0 text-3xl  p-1 flex hover:bg-zinc-800 font-bold hover: rounded-full hover:borer-2 hover:w-fit  '>
          <span class="material-symbols-outlined mr-5 text-5xl -ml-1 ">
            home </span> <p className='pt-1 hover: mr-3'>Home</p>
        </li>

        <li className='m-1 ml-0 text-3xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit '>
          <span className="material-symbols-outlined mr-4 text-5xl">
            search </span>  <p className='pt-1 hover: mr-3'>Explore</p>
        </li>

        <li className='m-1 ml-0 text-3xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit '>
          <span class="material-symbols-outlined mr-4 text-5xl ">
            notifications </span>  <p className='pt-1 hover: mr-3'>Notifications</p>
        </li>

        <li className='m-1 ml-0 text-3xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit '>
          <span class="material-symbols-outlined mr-4 text-5xl">
            mail </span>  <p className='pt-1 hover: mr-3'>Messages</p>
        </li>

        <li className='w-1/5 flex flex-row m-1 ml-0 text-3xl p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit '>
          <img src="grok.png" alt="GROK logo" className='w-12 mr-4 p-1 text-5xl' />  <p className=' hover: mr-3'>Grok</p>
        </li>

        <li className='m-1 ml-0 text-3xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit '>
          <span class="material-symbols-outlined mr-4 text-5xl ">
            list_alt </span>  <p className='pt-1 hover: mr-3'>Lists</p>
        </li>

        <li className='w-1/5 flex flex-row m-1 ml-0 text-3xl  p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit '>
          <img src="x logo.png" alt="x logo" className='w-12 mr-4 text-5xl' />  <p className=' hover: mr-3'>Premium</p>
        </li>

        <li className='m-1 ml-0 text-3xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit '>
          <span class="material-symbols-outlined mr-4 text-5xl">
            person </span>  <p className='pt-1 hover: mr-3'>Profile</p>
        </li>

        <li className='m-1 ml-0 text-3xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit '>
          <span class="material-symbols-outlined mr-4 text-5xl">
            more_horiz </span>  <p className='pt-1 hover: mr-3'>More</p>
        </li>

      </ul>

      <PostButton UserData={UserData}/>
      <ProfileBar UserData={UserData} />
    </div>

  )
}

