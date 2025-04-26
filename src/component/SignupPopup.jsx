import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import GenderDropdown from "./GenderDropdown";
import SignIn from "./SigninPopup";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../contexts/auth";
import { NavLink } from "react-router";

const SignupPop = ({ isOpen, onClose, openSignIn }) => {

  const [isSignIn, setSignIn] = useState(false);
  const { isAuth, setAuth } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAgin, setShowPasswordAgain] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',

    }
  });
  const handleSignInClick = () => {
    onClose(); // Close the SignIn
    openSignIn(); // Open the SignUp
  };
  if (!isOpen) {
    return null;
  }

  const submit = () => {
    setAuth(true);
    onClose();
  };
  return (
    <div className="flex justify-center items-center fixed inset-0 z-100 blackdrop-blur-md bg-[rgba(128,128,128,0.25)] mx-auto">
      <div className="fixed bg-white p-10 rounded-lg shadow-lg max-w-7xl mx-auto">
        <div className="fixed inset-0 bg-[rgba(128,128,128,0.25)] backdrop-blur-md flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg w-96"
          >
            <div className="flex flex-col-reverse ">
              <button onClick={onClose} className="ml-auto">
                <RxCross1 />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center m-10">
              <h2 className="text-xl text-[#362518] font-bold">
                Register your account
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <p className="mb-1">First Name</p>
                <p className="ml-1 text-red-600">*</p>
              </div>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg"
                {...register("firstName",{required:"Firstname is requried"})}
              />

              <div className="flex">
                <p className="mb-1">Last Name</p>
                <p className="ml-1 text-red-600">*</p>
              </div>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg"
                {...register("lastName",{required:"LastName is required"})}
              />

              <div className="flex">
                <p className="mb-1">Phone Number</p>
                <p className="ml-1 text-red-600">*</p>
              </div>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="0xx-xxx-xxx"
                className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg"
                {...register("phoneNumber",{required:"Phone Number is required"})}
              />

              <div className="flex">
                <p className="mb-1">Email</p>
                <p className="ml-1 text-red-600">*</p>
              </div>
              <input
                type="text"
                name="Email"
                placeholder="username@gmail.com"
                className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg"
                {...register("email",{required:"Email is required"})}
              />

              <div className="flex">
                <p className="mb-1">Password</p>
                <p className="ml-1 text-red-600">*</p>
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg"
                {...register("password", {required: "Password is requried" , minLength: 6,})}
                onClick={() => setShowPassword((prev) => !prev)}
              />

              <div className="flex">
                <p className="mb-1">Confirm Password</p>
                <p className="ml-1 text-red-600">*</p>
              </div>
              <input
                id="confirmPassword"
                type={showPasswordAgin ? "text" : "password"}
                className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg"
                {...register("confirmPassword", {required: "Confirm Password is requried" , minLength: 6,})}
                onClick={() => setShowPasswordAgain((prev) => !prev)}
              />

              <button className="bg-[#362518] text-white p-3 rounded-lg" onClick={submit}>
                Submit
              </button>
              <div className="flex mt-5">
                <p className="">Already have account?</p>
                <p
                  className="ml-1 font-bold underline"
                  onClick={handleSignInClick}
                >
                  Sign In
                </p>
              </div>
            </div>
          </motion.div>
          <SignIn isOpen={isSignIn} onClose={() => setSignIn(false)} />
        </div>
      </div>
    </div>
  );
};

export default SignupPop;
