import "./App.css";
import {SideBar} from "./components/sideBar.js";
import {Main} from "./components/main.js";

function App(){
    return(
      <>
       <head>
       <title>Home / X</title>
       </head>
      <div className="bg-black m-0 p-0 w-screen h-screen text-white flex   cursor-pointer overflow-hidden">
        <nav>
        <SideBar className="flex-shrink-0 "/>
        </nav>

          <main className="grow ml-8 overflow-y-auto overflow-x-hidden">
          <Main/>
          </main>
        
      </div>  
      </>
    );
}

export default App;
