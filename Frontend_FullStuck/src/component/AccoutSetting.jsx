import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as userAPI from "../api/userAPI"
import { NavLink, useNavigate } from "react-router-dom";
import { CircleUser } from "lucide-react";


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
  const [profileImageBase64, setProfileImageBase64] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountSchema),
  });

  // Function to convert file to base64
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data) => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== "" && value !== undefined)
    );

    // Convert image to base64 if file is selected
    let imageBase64 = null;
    if (selectedFile) {
      try {
        imageBase64 = await convertFileToBase64(selectedFile);
        console.log("📷 รูปภาพ Base64:", imageBase64.substring(0, 100) + "...");
      } catch (error) {
        console.error("Error converting image to base64:", error);
        alert("Failed to process image");
        return;
      }
    }

    const response = await userAPI.updateUser(
      userId,
      filteredData.firstName,
      filteredData.lastName,
      filteredData.phoneNumber,
      filteredData.email,
      filteredData.password, // Fixed: now passing password correctly
      imageBase64 // Fixed: passing base64 string instead of File object
    );

    reset();
    setSelectedFile(null);
    setProfileImageBase64(null);

    if (response.success) {
      navigate("/");
    } else {
      alert("Failed to update user: " + response.msg);
    }
  };

  const handleCancel = () => {
    reset();
    setSelectedFile(null);
    setProfileImageBase64(null);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Preview the selected image
      try {
        const base64 = await convertFileToBase64(file);
        setProfileImageBase64(base64);
      } catch (error) {
        console.error("Error previewing image:", error);
      }
    }
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
        console.log(response.data);

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

    if (userId) {
      handleFetchUserData();
    }
  }, [userId, reset]);

  return (
    <div className="bg-[#F3EAD3] min-h-svh">
      <div className="min-h-screen bg-[#F3EAD3] text-white flex items-center justify-center p-4">
        <div className="bg-white text-black rounded-xl shadow-xl p-10 w-full max-w-3xl">
          <h1 className="text-2xl font-bold underline mb-6 text-center text-[#2A1B13]">
            Account Setting
          </h1>

          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full mb-2 overflow-hidden flex items-center justify-center bg-gray-200">
              {profileImageBase64 ? (
                <img
                  src={profileImageBase64}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : user?.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="Current Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <CircleUser className="h-12 w-12 text-gray-500" />
              )}
            </div>

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
                placeholder="Leave blank to keep current password"
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
                placeholder="Leave blank to keep current password"
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