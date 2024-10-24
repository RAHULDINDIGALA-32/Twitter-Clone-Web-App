//import {useState} from 'react';
import { UserData, PostData } from './data';


function Post_Button() {
  return (
    <div>

      <button className=" mt-1 bg-[rgb(29,155,240)] hover:bg-blue-500 w-60 h-16 text-2xl rounded-full font-semibold ">
        Post
      </button>


    </div>
  )

}

function Profile_Bar({ UserData }) {
  return (

    <div className=' absolute -bottom-1 p-3 py-1 w-60  mb-8  -ml-1 flex  space-x-2 font-bold hover:bg-zinc-700 hover:rounded-full on hover:font-bold  '>
      <div className=' w-12 h-12 mt-1 rounded-full overflow-hidden'>
        <img src={UserData.userImage} alt='user' className='w-fit ' />
      </div>
      <div className="text-xl">
        <p>{UserData.name}</p>
        <p className='text-zinc-400'>{UserData.userName}</p>
      </div>
      <div className="">
        <span class="material-symbols-outlined absolute right-2 ml-4 text-3xl pt-2">
          more_horiz </span>
      </div>

    </div>


  )
}

export function NavBar() {
  return (
    <div className='  ml-40 mt-3 text=white w-80 h-screen flex flex-col '>

      <div className="w-14 h-14 mt-1 hover:rounded-full hover:bg-zinc-800 hower:w-fit hover:borer-2">
        <img src="x logo.png" alt="x logo" />
      </div>


      <ul className=' flex flex-col  p-1 '>

        <li className='m-1 ml-0 text-3xl  p-1 flex hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit  hover:font-bold'>
          <span class="material-symbols-outlined mr-5 text-5xl -ml-1 ">
            home </span> <p className='pt-1 hover: mr-3'>Home</p>
        </li>

        <li className='m-1 ml-0 text-3xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span className="material-symbols-outlined mr-4 text-5xl">
            search </span>  <p className='pt-1 hover: mr-3'>Explore</p>
        </li>

        <li className='m-1 ml-0 text-3xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span class="material-symbols-outlined mr-4 text-5xl ">
            notifications </span>  <p className='pt-1 hover: mr-3'>Notifications</p>
        </li>

        <li className='m-1 ml-0 text-3xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span class="material-symbols-outlined mr-4 text-5xl">
            mail </span>  <p className='pt-1 hover: mr-3'>Messages</p>
        </li>

        <li className='w-1/5 flex flex-row m-1 ml-0 text-3xl p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <img src="grok.png" alt="GROK logo" className='w-12 mr-4 text-5xl' />  <p className=' hover: mr-3'>Grok</p>
        </li>

        <li className='m-1 ml-0 text-3xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span class="material-symbols-outlined mr-4 text-5xl">
            list_alt </span>  <p className='pt-1 hover: mr-3'>Lists</p>
        </li>

        <li className='w-1/5 flex flex-row m-1 ml-0 text-3xl  p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <img src="x logo.png" alt="x logo" className='w-12 mr-4 text-5xl' />  <p className=' hover: mr-3'>Premium</p>
        </li>

        <li className='m-1 ml-0 text-3xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span class="material-symbols-outlined mr-4 text-5xl">
            person </span>  <p className='pt-1 hover: mr-3'>Profile</p>
        </li>

        <li className='m-1 ml-0 text-3xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span class="material-symbols-outlined mr-4 text-5xl">
            more_horiz </span>  <p className='pt-1 hover: mr-3'>More</p>
        </li>

      </ul>

      <Post_Button />
      <Profile_Bar UserData={UserData} />
    </div>

  )
}


function Post({ x }) {
  return (
    <div className="flex flex-1 w-full   border-y-2 b-red-500 border-[rgb(47,51,54)] border-solid overflow-y-auto max-h-screen">

       <div className="role:profile_image  w-[9%]  h-auto b-amber-300">
        <div className=" m-2 w-10 h-10 b-amber-800 rounded-full overflow-hidden">
          <img src={x.userImage} alt="UserImage" className="w-fit" />
        </div>
      </div>

      <div className=" flex-col w-[91%] h-[100%] b-lime-300">

        <div className="role:profile_name mt-2 b-teal-500 w-[100%] h-6 flex justify- gap-2 ">
          <p className="text-xl font-bold h-fit">{x.name}</p>
          <img src="verify.png" alt="verified" className="w-5 h-5 mt-1" />
          <p className="text-zinc-400 text-xl">{x.username}</p>
          <p className="text-zinc-400 text-xl">{x.time}</p>
        </div>

        <div className="role:message b-teal-700 mt-2 text-lg">
          <p className="">{x.postMessage}</p>
        </div>

        <div className="role:Post_Image/Video pt-2  pr-4 w-full h-auto rounded-lg overflow-hidden">
          {x.postImage === 'NULL' ? (
            <video  controls className="rounded-lg w-full max-w-[100%] h-auto max-h-[60vh] min-h-[30vh] object-fit">
              <source src={x.postVideo} type="video/mp4" />
            </video>
          ) : (
            <img src={x.postImage} alt="postImage" className="rounded-2xl w-fit  h-auto max-h-[60vh] " />
          )}
        </div>

        <div className="role: reaction_bar mt-3 flex justify-between mb-1 px-4">

          <div className="role: reply ">
            <span className="material-symbols-outlined text-zinc-400 hover:text-[rgb(29,155,240)] fill-none"> quick_phrases </span>
          </div>

          <div className="role: repost">
            <span className="material-symbols-outlined text-zinc-400 hover:text-green-400 fill-none"> cycle </span>
          </div>

          <div className="role: like">
            <span className="material-symbols-outlined text-zinc-400 hover:text-pink-500 fill-0"> favorite </span>
          </div>

          <div className="role: view">
            <span className="material-symbols-outlined text-zinc-400 hover:text-[rgb(29,155,240)] fill-none"> signal_cellular_alt </span>
          </div>

          <div className="role: bookmark">
            <span className="material-symbols-outlined text-zinc-400 hover:text-[rgb(29,155,240)] fill-none"> bookmark </span>
          </div>

          <div className="role: share  hover: rounded-full text-zinc-400
          hover:bg-zinc-700  hover:text-[rgb(29,155,240)]">
            <span className="material-symbols-outlined fill-none"> upload </span>
          </div>

        </div>


        </div>


    </div>

  )
}


function PostList() {
  return (
    <div>
      {PostData.map((x, index) => (
        <div key={index} className=''>
          <Post x={x} />
        </div>
      ))}
    </div>
  )
}

export function Main() {
  return (
    <div className=" flex w-[100%]  justify-start ">
      <div className='ml-1 flex justify-between  gap-4 w-[90%] grow-1'>
        <div className="  shrink-0 w-[60.0%] h-  border-[rgb(47,51,54)] border-x  border-solid ">
          <PostList /> 
        </div>

        <div className=" h-screen w-[40%] mr-3 ml-1">

        </div>

      </div>

    </div>
  )
}



