import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { LuUserCircle } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState(false);
  const userData = useSelector(state => state.user);
  // console.log(userData.user.email);

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logged out successfully")
    setTimeout(() => {
      navigate("/login"); 
  }, 1500);
    setShowDropDown(false);
  }
  // console.log(process.env.REACT_APP_ADMIN_EMAIL);
  return (
    <>
      <nav className="fixed w-full h-16 px-2 md:px-4 border-b-2 bg-white">
        {/* desktop and tablet */}

        <div className="flex h-full items-center justify-between">
          <Link to="/">
            <div className="h-full">
              <img src="logo.png" alt="clickSHOP" width={50} />
            </div>
          </Link>

          <div className="flex gap-4 items-center text-2xl md:gap-7">
            <nav className="flex gap-3 md:gap-7 text-base md:text-lg">
              <Link to={"/"}>Home</Link>
              <Link to={"/menu"}>Menu</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
            </nav>
            <div className="text-slate-600 relative">
              <Link to={"/cart"} ><FaCartShopping /></Link>
              <div className="absolute text-sm -top-2 -right-1 text-white bg-red-600 rounded-full m-0 p-0 text-center w-4">0</div>
            </div>
            <div className="text-slate-600 " onClick={() => setShowDropDown(!showDropDown)}>
              {userData.user.image ? <img className=" rounded-xl overflow-hidden drop-shadow-md cursor-pointer" src={userData.user.image}  alt="user" width={30} height={30} /> : <div className="cursor-pointer text-4xl"><LuUserCircle /></div>}
              {showDropDown && (
                <div className="text-lg absolute right-2 bg-white px-2 py-2 shadow drop-shadow-md">
                  {process.env.REACT_APP_ADMIN_EMAIL === userData.user.email && <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer block">New Product</Link> }
                  
                  {userData.user.email ? <p className=" cursor-pointer" onClick={handleLogout} >Logout ({userData.user.firstName.toUpperCase()})</p> : <Link to={"login"} className="whitespace-nowrap cursor-pointer block">Login</Link>}
                </div>
              )}
            </div>
          </div>

        </div>
        {/* mobile */}

        <div className="bg-slate-300 min-h-[calc(100vh)] w-full">
          <Outlet />
        </div>        

      </nav>
    </>
  )
};

export default Header;
