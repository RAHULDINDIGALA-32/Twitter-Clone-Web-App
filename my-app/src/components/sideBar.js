import React from 'react'
import { UserData} from '../utilities/PostData.js';

export function PostButton() {
  return (
    <div>

      <button className=" mt-1 bg-[rgb(29,155,240)] hover:bg-blue-500 w-60 h-16 text-2xl rounded-full font-semibold ">
        Post
      </button>


    </div>
  )

}

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
          <img src="grok.png" alt="GROK logo" className='w-12 mr-4 text-5xl' />  <p className=' hover: mr-3'>Grok</p>
        </li>

        <li className='m-1 ml-0 text-3xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit '>
          <span class="material-symbols-outlined mr-4 text-5xl">
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

      <PostButton />
      <ProfileBar UserData={UserData} />
    </div>

  )
}

