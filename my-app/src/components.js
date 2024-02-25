import {useState} from 'react';
import {NavData} from './data';


function Logo(){
    return(
        <img className='w-10 m-1  ' src="x logo.png" alt="logo" />
    )
}

function Nav_component({NavData}){
    return (
        <>
            {NavData.map((x) => {
                if (x.name !=='Grok' && x.name !== 'Premium') {
                    return ( 
                        <div className='flex  w-auto h-auto space-x-4 size-20 hover:bg-gray-500  hover:bg-opacity-45 hover: rounded-full'>
                            <span className="material-symbols-outlined w-6">
                                {x.icon}
                            </span> 
                            <h1 className='text-xl pb-2'>
                                {x.name}
                            </h1>
                        </div>
                    )
                } else {
                    return (
                        <div className='flex  w-auto h-auto space-x-4 size-20 hover:bg-slate-700 hover: rounded-full'>
                            <img src={x.icon} alt={x.name} className='w-6   hover:bg-slate-700 hover: rounded-full '/>
                            <h1 className='white text-xl'>
                                {x.name}
                            </h1>
                        </div>
                    )
                }
            })}
        </>
    )
}



export default function NavBar(){
    return(
        <nav className='h-screen ml-36 mt-1 p-1 '>
            <div >
               <div className=' hover:rounded-full  hover:bg-gray-700 '>
                   <Logo />
               </div >
               
               <div className='flex flex-col  space-y-4 m-4 ml-0 size-28 pt=2 pl=0'>
               <Nav_component NavData={NavData} />
                 </div>

            </div>
        </nav>
    );
}
