//import {useState} from 'react';
import { UserData, PostData } from './data';


function Post_Button() {
  return (
    <div>

      <button className=" mt-1 bg-[rgb(29,155,240)] hover:bg-blue-500 w-56 h-12 text-xl rounded-full font-semibold ">
        Post
      </button>


    </div>
  )

}

function Profile_Bar({ UserData }) {
  return (

    <div className=' absolute -bottom-1 p-3 py-1 w-56 mb-6  -ml-1 flex  space-x-2  hover:bg-zinc-700 hover:rounded-full on hover:font-bold  '>
      <div className=' w-11 h-11 rounded-full overflow-hidden'>
        <img src={UserData.userImage} alt='user' className='w-fit ' />
      </div>
      <div className="">
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
    <div className='  ml-36 text=white w-56 h-screen flex flex-col '>

      <div className="w-11 h-11 mt-1 hover:rounded-full hover:bg-zinc-800 hower:w-fit">
        <img src="x logo.png" alt="x logo" />
      </div>


      <ul className=' flex flex-col  p-1 '>

        <li className='m-1 ml-0 text-xl  p-1 flex hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit  hover:font-bold'>
          <span class="material-symbols-outlined mr-5 text-3xl -ml-1">
            home </span> <p className='pt-1 hover: mr-3'>Home</p>
        </li>

        <li className='m-1 ml-0 text-xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span className="material-symbols-outlined mr-4 text-3xl">
            search </span>  <p className='pt-1 hover: mr-3'>Explore</p>
        </li>

        <li className='m-1 ml-0 text-xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span class="material-symbols-outlined mr-4 text-3xl ">
            notifications </span>  <p className='pt-1 hover: mr-3'>Notifications</p>
        </li>

        <li className='m-1 ml-0 text-xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span class="material-symbols-outlined mr-4 text-3xl">
            mail </span>  <p className='pt-1 hover: mr-3'>Messages</p>
        </li>

        <li className='w-1/5 flex flex-row m-1 ml-0 text-xl p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <img src="grok.png" alt="GROK logo" className='w-8 mr-4 text-3xl' />  <p className=' hover: mr-3'>Grok</p>
        </li>

        <li className='m-1 ml-0 text-xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span class="material-symbols-outlined mr-4 text-3xl">
            list_alt </span>  <p className='pt-1 hover: mr-3'>Lists</p>
        </li>

        <li className='w-1/5 flex flex-row m-1 ml-0 text-xl  p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <img src="x logo.png" alt="x logo" className='w-8 mr-4 text-3xl' />  <p className=' hover: mr-3'>Premium</p>
        </li>

        <li className='m-1 ml-0 text-xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span class="material-symbols-outlined mr-4 text-3xl">
            person </span>  <p className='pt-1 hover: mr-3'>Profile</p>
        </li>

        <li className='m-1 ml-0 text-xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
          <span class="material-symbols-outlined mr-4 text-3xl">
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
    <div classname="flex w-[100%]  h-14 border-x-2 bg-red-500 border-[rgb(47,51,54)] border-solid">
      <div className="role:profile_image  w-[8%] h-[100%]  bg-amber-300">
        <div className="w-8 h-8 bg-amber-800 rounded-full overflow-hidden">
          <img src={x.userImage} alt="UserImage" className="w-fit" />
        </div>
      </div>

      <div className="grow-0 flex-col w-[92%] h-[100%] bg-lime-300">

        <div className="role:profile_name w-[100%] h-5 flex justify-start gap-2">
          <p className="">{x.name}</p>
          <img src="verify.png" alt="verified" className="w-5 h-5" />
          <p className="text-zinc-400">{x.username}</p>
          <p className="text-zinc-400">{x.time}</p>
        </div>

        <div className="role:message ">
          <p className="">{x.postMessage}</p>
        </div>

        <div className="role:Post_Image/Video">
          {x.postImage === 'NULL' ? (
            <video width="320" height="240" controls>
              <source src={x.postVideo} type="video/mp4" />
            </video>
          ) : (
            <img src={x.postImage} alt="postImage" className="" />
          )}
        </div>

        <div className="role: reaction_bar mt-1 flex justify-between">

          <div className="role: reply ">
            <span className="material-symbols-outlined hover:text-[rgb(29,155,240)] fill-none"> quick_phrases </span>
          </div>

          <div className="role: repost">
            <span className="material-symbols-outlined hover:text-green-400 fill-none"> cycle </span>
          </div>

          <div className="role: like">
            <span className="material-symbols-outlined hover:text-pink-500 fill-0"> favorite </span>
          </div>

          <div className="role: view">
            <span className="material-symbols-outlined hover:text-[rgb(29,155,240)] fill-none"> signal_cellular_alt </span>
          </div>

          <div className="role: bookmark">
            <span className="material-symbols-outlined hover:text-[rgb(29,155,240)] fill-none"> bookmark </span>
          </div>

          <div className="role: share  hover: rounded-full 
          hover:bg-zinc-700 hover:text-[rgb(29,155,240)]">
            <span className="material-symbols-outlined fill-none"> upload </span>
          </div>

        </div>


      </div>


    </div>

  )
}

export function Main() {
  return (
    <div className=" flex w-[100%] h-screen justify-start ">
      <div className='ml-1 flex justify-between  gap-4 w-[88%] grow-1'>
        <div className="shrink-0 w-[60.0%] h-screen  border-[rgb(47,51,54)] border-x  border-solid ">
          <Post x={PostData[0]} />
        </div>

        <div className=" h-screen w-[40%] mr-3 ml-1">

        </div>

      </div>

    </div>
  )
}



