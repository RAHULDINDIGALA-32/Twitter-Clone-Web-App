import "./App.css";
import {NavBar, Main} from "./components.js";

function App(){
    return(
      <>
       <head>
       <title>Home / X</title>
       </head>
      <div className="bg-black m-0 p-0 w-screen h-screen text-white flex   cursor-pointer overflow-hidden">
        <nav>
        <NavBar className="flex-shrink-0"/>
        </nav>

          <main className="grow ml-8 overflow-y-auto overflow-x-hidden">
          <Main/>
          </main>
        
      </div>  
      </>
    );
}

export default App;
