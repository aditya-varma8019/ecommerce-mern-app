import React from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
    const [data, setData] = React.useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {email, password } = data;
        if( email && password ) {
            
        }
        else {
            alert("Please fill in all the fields");
        }
        
    }

  return (
    <div className="pt-3 md:p-4">
        <div className="w-full max-w-sm bg-white m-auto flex justify-center flex-col items-center p-4 rounded-xl">
            {/* <h1 className="text-2xl font-bold text-center text-gray-800">Sign Up</h1> */}
            <div className="w-20 rounded-full drop-shadow-md overflow-hidden shadow-md">
                <img src={"/login-animation.gif"} alt="Login" className="w-full text-center" />
            </div>

            <form className="mt-5 w-full" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={data.email} autoComplete="true" onChange={handleChange} className=" mt-2 mb-3 w-full border-2 border-gray-300 bg-slate-300 p-2 rounded-lg focus:outline-none focus:border-green-400" />

                <label htmlFor="password">Password</label>
                <div className="flex items-center bg-slate-300  mt-2 mb-3 rounded-lg focus-within:outline focus-within:outline-green-400 p-2.5">
                    <input type={showPassword ? "text" : "password"} name="password" value={data.password} onChange={handleChange} className=" w-full bg-slate-300 border-none outline-none" />
                    <span className="flex" onClick={() => setShowPassword(!showPassword)}>
                        {/* <input type="checkbox" name="showPassword" id="showPassword" className="mr-2" />
                        <label htmlFor="showPassword" className="text-sm">Show Password</label> */}
                        { showPassword ? <BiShow className=" text-xl ml-2 cursor-pointer" />
                            :<BiSolidHide className=" text-xl ml-2 cursor-pointer" />}

                    </span>
                </div>

                <button type="submit" className="w-full mt-4 text-2xl bg-green-400 text-white p-2 rounded-lg hover:bg-green-500">Login</button>        

            </form>
            <div className="mt-4">
                <p className="text-gray-800">Don't have an account? <a href="/signup" className="text-green-400 hover:text-green-500">Signup</a></p>
            </div>  
        </div>
    </div>
  )
};

export default Login;
