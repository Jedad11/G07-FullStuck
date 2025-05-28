import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import SignUp from "./SignupPopup";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/auth";
import { useForm } from "react-hook-form";
import * as authAPI from "@/api/authAPI";
import { IconEye, IconEyeOff } from '@tabler/icons-react';


const SignIn = ({ isOpen, onClose, openSignUp }) => {
  const [isSignUp, setSignUp] = useState(false);
  const { isAuth, setAuth } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterClick = () => {
    onClose(); // Close the SignIn
    openSignUp(); // Open the SignUp
  };
  const {
    register, handleSubmit, formState: { errors }, reset } = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
    });
  const submit = async (formData) => {
    const response = await authAPI.Login(formData.email, formData.password);
    console.log(formData);
    
    if (!response.success) {
      alert(response.msg);
      return;
    }
    const token = response.data.data;
    setAuth(token);
    reset();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
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
          <h2 className="text-2xl text-[#362518] font-bold">Sign In</h2>
          <p className="text-[#362518] font-semibold">
            Login into your account
          </p>
        </div>
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="flex items-center mb-1">
              Email <span className="ml-1 text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="username@gmail.com"
              className="border border-gray-300 p-2 rounded-lg w-full"
              {...register("email")}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="flex items-center mb-1">
              Password <span className="ml-1 text-red-600">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="border border-gray-300 p-2 rounded-lg w-full pr-10"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500"
              tabIndex={-1}
            >
              {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
            </button>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button type="submit" className="bg-[#362518] text-white p-3 rounded-lg w-full">
            Sign In
          </button>
        </form>
        <div className="flex mt-5">
          <p className="">Don't have an account yet?</p>
          <p className="ml-1 font-bold underline" onClick={handleRegisterClick}>
            Register for free
          </p>
        </div>
      </motion.div>
      <SignUp isOpen={isSignUp} onClose={() => setSignUp(false)} />
    </div>
  );
};

export default SignIn;
