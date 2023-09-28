import React from "react";
import Payload from "./components/Payload";
import Navbar from "./components/Navbar";

const App = () => {
  return (

    <div className="app">
      <Navbar/>
        <div className="flex justify-center bg-[#121415] w-full p-6 ">
      <Payload />
    </div>
    </div>
  );
};

export default App;
