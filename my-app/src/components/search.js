import { useState } from 'react';
import { PostData } from '../utilities/PostData';

export default function SearchComponent() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Search algorithm to filter users based on name or username
    if (query.trim() !== '') {
      const results = PostData.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.username.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="role:searchBar z-10 ml-5 sticky top-0 w-[90%] h-[70px] bg-black">
        <input
          placeholder=" &#x1F50D;     Search"
          className={`w-full h-[80%] rounded-full text-xl mt-2 bg-[rgb(32,35,39)] text-white px-4 focus:outline-none focus:-outline-offset-1 focus:outline-blue-500 transition-all duration-300 ${searchFocused ? 'outline-blue-500 shadow-[0_0_10px_rgb(0,183,255)]' : ''}`}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          onChange={handleSearch}
        />
        {/* Search Results Pop-up */}
      
       {searchFocused && searchQuery && (
          <div className="absolute z-20  top-[70px] w-full min-h-[120px] max-h-[300px] overflow-y-auto bg-black p-3 rounded-xl shadow-lg shadow-slate-200  ease-in-out"
          onWheel={(e) => e.stopPropagation()} // Prevents parent scrolling 
          >
            {searchResults.length > 0 ? (
              searchResults.map((user) => (
                <div key={user.id} className="flex items-center gap-4 p-2 hover:bg-zinc-950 rounded-lg cursor-pointer">
                  <img src={user.userImage} alt={user.name} className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col text-lg">
                    <div className='flex flex-row items-center '>
                    <span className="text-white font-bold">{user.name}</span>
                    <img src="verify.png" alt="verified" className="w-5 h-5 ml-2" />
                    </div>
                    <span className="text-zinc-500">{user.username}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-zinc-500 text-xl text-center mt-2">No results found</p>
            )}
            
          </div>
        )}
        


        {searchFocused && searchQuery.length === 0 ? (
                <div className="absolute top-[70px] w-full min-h-[120px] bg-black p-3 rounded-xl shadow-lg  shadow-slate-200 z-0 ease-in-out ">
                <p className="text-zinc-500 text-xl text-center mt-2">Try searching for people, lists, or keywords</p>
              </div>
            ) : null
        }

      
    </div>
  );
}
