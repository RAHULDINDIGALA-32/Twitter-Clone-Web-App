import {useState} from 'react';
import { UserData } from './data';


function Post_Button(){
    return(
       <div>
        
        <button className=" mt-1 bg-blue-500 hover:bg-blue-600 w-56 h-12 text-2xl rounded-full font-bold ">
          Post
        </button>


       </div>
    )
        
}

function Profile_Bar({UserData}){
  return(
   
    <div className=' absolute -bottom-1 p-3 py-1 w-56 mb-6  -ml-1 flex  space-x-2  hover:bg-zinc-700 hover:rounded-full on hover:font-bold  '>
       <div className=' w-11 h-11 rounded-full overflow-hidden'>
          <img src={UserData.userImage} alt='user' className='w-fit '/>
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

export  function NavBar(){
    return(
        <div className='  ml-36 text=white w-56 h-screen flex flex-col '>
          
          <div className="w-11 h-11 mt-1 hover:rounded-full hover:bg-zinc-800 hower:w-fit">
            <img src="x logo.png" alt="x logo"/>
          </div>

         
          <ul className=' flex flex-col  p-1 '>
            
            <li className='m-1 ml-0 text-xl  p-1 flex hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit  hover:font-bold'>
            <span class="material-symbols-outlined mr-5 text-3xl -ml-1">
           home </span> <p className='pt-1 hover: mr-3'>Home</p>
            </li>

            <li  className='m-1 ml-0 text-xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
            <span className="material-symbols-outlined mr-4 text-3xl">
           search </span>  <p className='pt-1 hover: mr-3'>Explore</p>
            </li>

            <li  className='m-1 ml-0 text-xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
            <span class="material-symbols-outlined mr-4 text-3xl ">
           notifications </span>  <p className='pt-1 hover: mr-3'>Notifications</p>
            </li>

            <li  className='m-1 ml-0 text-xl flex p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
            <span class="material-symbols-outlined mr-4 text-3xl">
           mail </span>  <p className='pt-1 hover: mr-3'>Messages</p>
            </li>

            <li className='w-1/5 flex flex-row m-1 ml-0 text-xl p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
               <img src="grok.png" alt="GROK logo" className='w-8 mr-4 text-3xl' />  <p className=' hover: mr-3'>Grok</p>
            </li>

            <li  className='m-1 ml-0 text-xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
            <span class="material-symbols-outlined mr-4 text-3xl">
           list_alt </span>  <p className='pt-1 hover: mr-3'>Lists</p>
            </li>

            <li className='w-1/5 flex flex-row m-1 ml-0 text-xl  p-1  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
               <img src="x logo.png" alt="x logo" className='w-8 mr-4 text-3xl' />  <p className=' hover: mr-3'>Premium</p>
            </li>

            <li  className='m-1 ml-0 text-xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
            <span class="material-symbols-outlined mr-4 text-3xl">
           person </span>  <p className='pt-1 hover: mr-3'>Profile</p>
            </li>

            <li  className='m-1 ml-0 text-xl p-1 flex flex-row  hover:bg-zinc-800 hover: rounded-full hover:borer-2 hover:w-fit hover:font-bold'>
            <span class="material-symbols-outlined mr-4 text-3xl">
           more_horiz </span>  <p className='pt-1 hover: mr-3'>More</p>
            </li>

          </ul>

          <Post_Button/>
          <Profile_Bar UserData={UserData}/>
        </div>

    )
}



export function Main(){
  return(
<div className=" relative grow h-screen ">
   

 <div className="absolute left-0 w-7/12  h-screen border-zinc-400 border-x border-opacity-45 border-solid ">
       
 </div>

</div>
  )
}
