import React, { useState } from "react";
import {motion} from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import GenderDropdown from "./GenderDropdown";
import SignIn from "./SigninPopup";

const SignUp = ({isOpen, onClose, openSignIn}) => {
    const [isSignIn, setSignIn] = useState(false);

    const handleSignInClick = () => {
        onClose(); // Close the SignIn modal
        openSignIn();// Open the SignUp modal
    };

    if(!isOpen){
        return null;
    }
    
    return(
            <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
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
                    <h2 className="text-xl text-[#362518] font-bold">Register your account</h2>
                    {/* <p className="text-[#362518] font-semibold">Login into your account</p> */}
                </div>
                <div className="flex flex-col">
                    <div>
                        
                    </div>
                    <div className="flex">
                        <p className="mb-1">First Name</p>
                        <p className="ml-1 text-red-600">*</p>
                    </div>
                    <input type="text" name="First name" placeholder="First name" className="border border-gray-300 mb-5 p-2 pl-4 rounded-lg" required/>

                    <div className="flex">
                        <p className="mb-1">Last Name</p>
                        <p className="ml-1 text-red-600">*</p>
                    </div>
                    <input type="text" name="Last Name" placeholder="Last Name" className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg" required/>

                    <div className="flex">
                        <p className="mb-1">Birth Date</p>
                        <p className="ml-1 text-red-600">*</p>
                    </div>
                    <input type="date" name="Birth Date" placeholder="DD/MM/YYYY" className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg" required/>

                    <div className="flex">
                        <p className="mb-1">Phone Number</p>
                        <p className="ml-1 text-red-600">*</p>
                    </div>
                    <input type="text" name="Phone number" placeholder="0xx-xxx-xxx" className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg" required/>

                    <div className="flex">
                        <p className="mb-1">Gender</p>
                        <p className="ml-1 text-red-600">*</p>
                    </div>
                    <GenderDropdown/>

                    <div className="flex">
                        <p className="mb-1">Email</p>
                        <p className="ml-1 text-red-600">*</p>
                    </div>
                    <input type="text" name="Email" placeholder="username@gmail.com" className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg" required/>

                    <div className="flex">
                        <p className="mb-1">Address</p>
                        <p className="ml-1 text-red-600">*</p>
                    </div>
                    <div>
                        <input type="text" name="Province" placeholder="Province" className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg w-1/2" required/>
                        <input type="text" name="District" placeholder="District" className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg w-1/2" required/>
                        <input type="text" name="Subdistrict" placeholder="Subdistrict" className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg w-1/2" required/>
                        <input type="text" name="Postal code" placeholder="Postal code" className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg w-1/2" required/>
                    </div>

                    <button className="bg-[#362518] text-white p-3 rounded-lg">Submit</button>
                    <div className="flex mt-5">
                        <p className="">Already have account?</p>
                        <p className="ml-1 font-bold underline" onClick={handleSignInClick}>Sign In</p>
                    </div>

                </div>
            </motion.div>
            <SignIn isOpen={isSignIn} onClose={() => setSignIn(false)}/>
        </div>
    );
}

export default SignUp;