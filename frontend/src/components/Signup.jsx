import React from "react";
import { BiShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ImageToBase64 from "../utilities/ImageToBase64";
import toast from "react-hot-toast";


const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
    const [data, setData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        image: ""
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    }

    const handleProfileImage = async (e) => {
        const data = await ImageToBase64(e.target.files[0]);
        setData({ ...data, image: data });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { firstName, lastName, email, password, confirmPassword } = data;
        if (firstName && lastName && email && password && confirmPassword) {
            if (password === confirmPassword) {
                // alert("Sign Up Successful");
                // window.location.href = "/login";
                

                const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                
                const dataRes = await res.json();
                // alert(dataRes.message)
                toast(dataRes.message);

                if(dataRes.alert) {
                    navigate("/login");
                }
            }
            else {
                toast("Passwords do not match");
            }
        }
        else {
            toast("Please fill in all the fields");
        }
    }

    return (
        <div className="pt-3 md:p-4">
            <div className="w-full max-w-sm bg-white m-auto flex justify-center flex-col items-center p-4 rounded-xl">
                {/* <h1 className="text-2xl font-bold text-center text-gray-800">Sign Up</h1> */}
                <div className="w-20 h-20 rounded-full drop-shadow-md overflow-hidden shadow-md relative">
                    <img src={data.image ? data.image : "/login-animation.gif"} alt="Sign Up" className="w-full text-center h-full" />
                    { <label htmlFor="profileImage" className="cursor-pointer">
                        <div className="absolute -bottom-0 h-1/3 w-full bg-slate-500 bg-opacity-50 text-center  ">
                            <p className="text-white">Upload</p>
                        </div>
                        <input type="file" accept="image/*" name="profileImage" id="profileImage" className="hidden" onChange={handleProfileImage} />
                    </label>}
                </div>
                {/* <div className=" ">
                        <p>Upload Profile Photo</p>
                    </div> */}
                <form className="mt-5" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" value={data.firstName} onChange={handleChange} className=" mt-2 mb-3 w-full border-2 border-gray-300 bg-slate-300 p-2 rounded-lg focus:outline-none focus:border-green-400" />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={data.lastName} onChange={handleChange} className=" mt-2 mb-3 w-full border-2 border-gray-300 bg-slate-300 p-2 rounded-lg focus:outline-none focus:border-green-400" />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={data.email} autoComplete="true" onChange={handleChange} className=" mt-2 mb-3 w-full border-2 border-gray-300 bg-slate-300 p-2 rounded-lg focus:outline-none focus:border-green-400" />

                    <label htmlFor="password">Password</label>
                    <div className="flex items-center bg-slate-300  mt-2 mb-3 rounded-lg focus-within:outline focus-within:outline-green-400 p-2.5">
                        <input type={showPassword ? "text" : "password"} name="password" value={data.password} onChange={handleChange} className=" w-full bg-slate-300 border-none outline-none" />
                        <span className="flex" onClick={() => setShowPassword(!showPassword)}>
                            {/* <input type="checkbox" name="showPassword" id="showPassword" className="mr-2" />
                        <label htmlFor="showPassword" className="text-sm">Show Password</label> */}
                            {showPassword ? <BiShow className=" text-xl ml-2 cursor-pointer" />
                                : <BiSolidHide className=" text-xl ml-2 cursor-pointer" />}

                        </span>
                    </div>

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="flex items-center bg-slate-300  mt-2 mb-3 rounded-lg focus-within:outline focus-within:outline-green-400 p-2.5">
                        <input type={showPasswordConfirm ? "text" : "password"} name="confirmPassword" value={data.confirmPassword} onChange={handleChange} className=" w-full bg-slate-300 border-none outline-none" />
                        <span className="flex" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>
                            {/* <input type="checkbox" name="showPassword" id="showPassword" className="mr-2" />
                        <label htmlFor="showPassword" className="text-sm">Show Password</label> */}
                            {showPasswordConfirm ? <BiShow className=" text-xl ml-2 cursor-pointer" />
                                : <BiSolidHide className=" text-xl ml-2 cursor-pointer" />}

                        </span>
                    </div>

                    <button type="submit" className="w-full mt-4 text-2xl bg-green-400 text-white p-2 rounded-lg hover:bg-green-500">Sign Up</button>

                </form>
                <div className="mt-4">
                    <p className="text-gray-800">Already have an account? <a href="/login" className="text-green-400 hover:text-green-500">Log In</a></p>
                </div>
            </div>
        </div>
    )
};

export default Signup;
