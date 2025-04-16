import React from "react";
import {motion} from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import SignUp from "./SignupPopup";
import App from "../App";

const SignIn = ({isOpen, onClose, openSignUp}) => {
    const [isSignUp,setSignUp] = useState(false);
    const [isLogIn, setLogIn] = useState(false);

    const handleRegisterClick = () => {
        onClose(); // Close the SignIn modal
        openSignUp();// Open the SignUp modal
    };

    const handleLogin = () => {
        onClose();
        setLogIn(true);
        
    };

    if(!isOpen){
        return null;
    }

    return(
        <div className="fixed inset-0 bg-[rgba(128,128,128,0.25)] backdrop-blur-md flex justify-center items-center z-50">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-lg w-96"
            >
            <div className="flex flex-col-reverse ">
                <button onClick={onClose} className="ml-auto"><RxCross1 /></button>
            </div>
            <div className="flex flex-col items-center justify-center m-10">
                <h2 className="text-2xl text-[#362518] font-bold">Sign In</h2>
                <p className="text-[#362518] font-semibold">Login into your account</p>
            </div>
            <div className="flex flex-col">
                <p className="mb-1">Email</p>
                <input type="text" name="email" placeholder="username@gmail.com" className="border border-gray-300 mb-5 p-2 pl-4 rounded-lg"/>
                <p className="mb-1">Password</p>
                <input type="password" name="password" placeholder="Password" className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg"/>
                <p className="m-2 underline">Forget Password?</p>
                <button className="bg-[#362518] text-white p-3 rounded-lg" onClick={handleLogin}>Sign In</button>
            </div>
            <div className="flex mt-5">
                <p className="">Don't have an account yet?</p>
                <p className="ml-1 font-bold underline" onClick={handleRegisterClick}>Register for free</p>
            </div>
            </motion.div>
            <SignUp isOpen={isSignUp} onClose={() => setSignUp(false)}/>
        </div>
    );
}

export default SignIn;