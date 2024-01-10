import React from "react";

const Header = () => {
  return (
    <header className=" fixed shadow-md w-full h-16 px-2 md:px-4">
         {/* desktop and tablet */}

        <div className=" flex h-full items-center">
            <div className=" h-13">
                <img src="/" alt="logo" className=" h-full" />
            </div>
        </div>


        {/* mobile */}
    </header>    
  )
};

export default Header;
