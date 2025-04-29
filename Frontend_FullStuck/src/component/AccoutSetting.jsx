import React, { useRef, useState} from "react";
import { NavLink } from "react-router";


const AccountSetting = () => {
  const fileInputRef = useRef(null);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleCancel = () => {
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    };

  const handleFileChange = () => {
    const file = e.target.files[0];

  };
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
                className="border border-gray-300 text-gray-700 px-4 py-1 rounded-md text-sm"
              />
              <button
                type="button"
                variant="outline"
                onClick={() =>
                  fileInputRef.current && fileInputRef.current.click()
                }
                className="border border-gray-300 text-gray-700 px-4 py-1 rounded-md text-sm"
              >
                Change Profile Picture
              </button>
            </div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="font-semibold">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Chotima"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="font-semibold">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Eamchareon"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="font-semibold">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="0xx-xxx-xxx"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="username@gmail.com"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="font-semibold">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="******"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="font-semibold">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="******"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
          </form>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/">
              <button
                type="submit"
                className="bg-[#2A1B13] text-white px-6 py-2 rounded-md"
              >
                Save Change
              </button>
            </NavLink>
            <button onClick={handleCancel} className="border border-gray-400 px-6 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSetting;