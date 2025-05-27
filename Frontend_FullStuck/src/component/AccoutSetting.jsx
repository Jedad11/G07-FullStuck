import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as userAPI from "../api/userAPI"
import { NavLink, useNavigate } from "react-router-dom";

// Zod schema
const accountSchema = z
  .object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    phoneNumber: z
      .string()
      .regex(/^0\d{9}$/, "Phone number format must be 0xxxxxxxxx")
      .optional(),
    email: z.string().email("Invalid email address").optional(),
    password: z.string().min(6, "Password must be at least 6 characters").optional(),
    confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters").optional(),
  })
  .refine(
    (data) =>
      (!data.password && !data.confirmPassword) || data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }
  );
const AccountSetting = () => {
  const fileInputRef = useRef(null);
  const [user, setUser] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountSchema),
  });


  const onSubmit = async (data) => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== "" && value !== undefined)
    );

    console.log("📦 ข้อมูลฟอร์มที่ส่ง:", filteredData);
    console.log("🖼️ รูปภาพที่แนบมาด้วย:", selectedFile);

    const response = await userAPI.updateUser(
      userId,
      filteredData.firstName,
      filteredData.lastName,
      filteredData.phoneNumber,
      filteredData.email,
      selectedFile
    );

    reset();
    setSelectedFile(null);

    if (response.success) {
      navigate("/");
    } else {
      alert("Failed to update user");
    }
  };

  const handleCancel = () => {
    reset();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log("📷 รูปภาพที่เลือก:", file);
  };


  function parseJwt(token) {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  }

  const token = localStorage.getItem("token");
  const payload = parseJwt(token);
  const userId = payload ? payload.userId : null;

  useEffect(() => {
    const handleFetchUserData = async () => {
      try {
        const response = await userAPI.getUserById(userId);
        setUser(response.data);
        reset({
          firstName: response.data.firstName || "",
          lastName: response.data.lastName || "",
          phoneNumber: response.data.phoneNumber || "",
          email: response.data.email || "",
        });
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };

    handleFetchUserData();
  }, [userId, reset]);

  return (
    <div className="bg-[#F3EAD3] min-h-svh">
      <div className="min-h-screen bg-[#F3EAD3] text-white flex items-center justify-center p-4">
        <div className="bg-white text-black rounded-xl shadow-xl p-10 w-full max-w-3xl">
          <h1 className="text-2xl font-bold underline mb-6 text-center text-[#2A1B13]">
            Account Setting
          </h1>

          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full mb-2"></div>
            <div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
                className="border border-gray-300 text-gray-700 px-4 py-1 rounded-md text-sm"
              >
                Change Profile Picture
              </button>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
          >
            {/* First Name */}
            <div>
              <label className="font-semibold">First Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                {...register("firstName")}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="font-semibold">Last Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                {...register("lastName")}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="font-semibold">Phone Number</label>
              <input
                type="tel"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="font-semibold">Password</label>
              <input
                type="password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                {...register("password")}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="font-semibold">Confirm Password</label>
              <input
                type="password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="md:col-span-2 mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="bg-[#2A1B13] text-white px-6 py-2 rounded-md"
              >
                Save Change
              </button>
              <NavLink to="/">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="border border-gray-400 px-6 py-2 rounded-md"
                >
                  Cancel
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
