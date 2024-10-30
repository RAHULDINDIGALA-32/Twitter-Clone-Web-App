
import { FeedHeader, UserPost, PostList } from "./feed.js"
import { UserData } from "../utilities/PostData.js"
import { ExploreX } from "./explore.js"
export function Main() {
    return (
      <div className="scrollbar-custom flex flex-row w-[100%] relative  ">
        <div className='scrollbar-custom ml-1  relative flex flex-row  gap-4 w-[90%] h-auto  overflow-y:auto z-7'>
          <div className="role:feed relative  flex-col shrink-0 w-[60.0%] h-auto  border-[rgb(47,51,54)] border-x  border-solid ">
            <FeedHeader/>
            <UserPost UserData={UserData}/>
            <PostList /> 
          </div>
  
          <div className="role:explore z  w-[90%] h-auto z-6 " >
          <ExploreX/>
        </div>
  
        </div>
        
  
      </div>
    )
  }

  

  /*
  import React, { useRef, useEffect, useState } from "react";
  import { FeedHeader, UserPost, PostList } from "./feed.js"
import { UserData } from "../utilities/PostData.js"
import { ExploreX } from "./explore.js"

export function Main(){
  const feedRef = useRef(null);
  const exploreRef = useRef(null);
  const [exploreScroll, setExploreScroll] = useState(0);

  // Handle scroll
  const handleScroll = () => {
    if (feedRef.current) {
      const feedScrollTop = feedRef.current.scrollTop;
      const feedScrollHeight = feedRef.current.scrollHeight - feedRef.current.clientHeight;
      const exploreMaxScroll = exploreRef.current.scrollHeight * 0.8;

      // Calculate exploreX scroll only up to 80%
      if (feedScrollTop < feedScrollHeight * 0.8) {
        setExploreScroll((feedScrollTop / feedScrollHeight) * exploreMaxScroll);
      }
    }
  };

  useEffect(() => {
    const feedEl = feedRef.current;
    feedEl.addEventListener("scroll", handleScroll);
    return () => feedEl.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-component">
      <div ref={feedRef} className="feed">
       
        <FeedHeader/>
            <UserPost UserData={UserData}/>
            <PostList /> 
  
      </div>
      <div ref={exploreRef} className="explore-container" style={{ transform: `translateY(-${exploreScroll}px)` }}>
        
        <ExploreX/>
    
      </div>
    </div>
  );
};
 */

