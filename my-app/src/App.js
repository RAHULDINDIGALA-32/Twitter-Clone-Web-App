import "./App.css";
import {NavBar, Main} from "./components.js";

function App(){
    return(
      <>
       <head>
       <title>Home/X</title>
       </head>
      <div className="bg-black m-0 p-0 fixed w-screen h-screen text-white flex   cursor-pointer">
        <nav>
        <NavBar/>
        </nav>
          
          <main className="grow ml-8">
          <Main />
          </main>
        
      </div>  
      </>
    );
}

export default App;
