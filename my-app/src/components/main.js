import { FeedHeader, UserPost, PostList } from "./feed.js"
import { UserData } from "../utilities/PostData.js"
import { Explore_X } from "./explore.js"
export function Main() {
    return (
      <div className=" flex flex-row w-[100%]   ">
        <div className='ml-1 flex flex-row  gap-4 w-[90%] h-auto overflow-y:auto '>
          <div className="role:feed flex-col shrink-0 w-[60.0%] h-auto  border-[rgb(47,51,54)] border-x  border-solid ">
            <FeedHeader/>
            <UserPost UserData={UserData}/>
            <PostList /> 
          </div>
  
          <div className="role:explore  w-[90%] h-auto  ">
          <Explore_X/>
        </div>
  
        </div>
        
  
      </div>
    )
  }