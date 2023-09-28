import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#1d1f22] flex ">
        <div className=" logo flex h-16 justify-center items-center w-[200px]  ">
          <div className="flex  flex-shrink-0 items-center">
            <img className="h-12" src="/telstra_logo.png" alt="Your Company" />
          </div>
          <h1 className="text-gray-400 font-semibold text-xl mx-4"> TELSTRA</h1>
        </div>
        <div className="name flex flex-1 items-center justify-center  ">
          <h1 className="text-gray-400 font-semibold text-xl">
            TSE Initializer
          </h1>
        </div>
        <div className="icons w-[200px] h-16 flex justify-center items-center">
          <div className="github items-center ">
            <a
              href="https://github.com/ftlrecords/tse_initializer"
              target="_blank"
            >
              <img className="h-10" src="/github-mark.png" alt="github icon" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
