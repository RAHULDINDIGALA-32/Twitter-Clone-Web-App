import "./App.css";
import {NavBar, Main} from "./components.js";

function App(){
    return(
      <>
       <head>
       <title>Home/X</title>
       </head>
      <div className="bg-black m-0 p-0 fixed w-screen h-screen text-white flex   cursor-pointer">
        <div>
        <NavBar/>
        </div>
          
          <div className="grow ml-8">
          <Main />
          </div>
          


      </div>  
      </>
    );
}

export default App;
