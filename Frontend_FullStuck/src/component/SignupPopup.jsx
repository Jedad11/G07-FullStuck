import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import SignIn from "./SigninPopup";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../contexts/auth";
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import * as UserAPI from "../api/userAPI";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupPop = ({ isOpen, onClose, openSignIn }) => {
  const [isSignIn, setSignIn] = useState(false);
  const { setAuth } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);

  const signupSchema = z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    phoneNumber: z.string()
      .nonempty("Phone Number is required")
      .regex(/^0\d{9}$/, "Phone Number format must be 0xxxxxxxx"),
    email: z.string().nonempty("Email is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters"),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const handleSignInClick = () => {
    onClose();
    openSignIn();
  };

  const submit = async (formData) => {
    const { confirmPassword, ...userData } = formData;
    const response = await UserAPI.createUser(userData);
    if (!response.success) {
      alert(response.msg);
      return;
    }
    setAuth(true);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(128,128,128,0.25)] backdrop-blur-md flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">
          <RxCross1 />
        </button>

        <h2 className="text-xl text-center font-bold text-[#362518] mb-6">
          Register your account
        </h2>

        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="flex items-center mb-1">
              First Name <span className="ml-1 text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-2 rounded-lg w-full"
              {...register("firstName")}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="flex items-center mb-1">
              Last Name <span className="ml-1 text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-2 rounded-lg w-full"
              {...register("lastName")}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="flex items-center mb-1">
              Phone Number <span className="ml-1 text-red-600">*</span>
            </label>
            <input
              type="tel"
              placeholder="0xx-xxx-xxx"
              className="border border-gray-300 p-2 rounded-lg w-full"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
          </div>

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

          {/* Confirm Password */}
          <div className="relative">
            <label className="flex items-center mb-1">
              Confirm Password <span className="ml-1 text-red-600">*</span>
            </label>
            <input
              type={showPasswordAgain ? "text" : "password"}
              className="border border-gray-300 p-2 rounded-lg w-full pr-10"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={() => setShowPasswordAgain(!showPasswordAgain)}
              className="absolute right-3 top-9 text-gray-500"
              tabIndex={-1}
            >
              {showPasswordAgain ? <IconEyeOff size={20} /> : <IconEye size={20} />}
            </button>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          <button type="submit" className="bg-[#362518] text-white p-3 rounded-lg w-full">
            Submit
          </button>
        </form>

        <div className="flex justify-center mt-5 text-sm">
          <p>Already have an account?</p>
          <button className="ml-1 font-bold underline" onClick={handleSignInClick}>
            Sign In
          </button>
        </div>

        <SignIn isOpen={isSignIn} onClose={() => setSignIn(false)} />
      </motion.div>
    </div>
  );
};

export default SignupPop;
