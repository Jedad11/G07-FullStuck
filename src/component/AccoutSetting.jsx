import React from "react";

export default function AccountSetting() {
  return (
    <div className="bg-[#F3EAD3] min-h-svh">
      <div className="min-h-screen bg-[#F3EAD3] text-white flex items-center justify-center p-4">
        <div className="bg-white text-black rounded-xl shadow-xl p-10 w-full max-w-3xl">
          <h1 className="text-2xl font-bold underline mb-6 text-center text-[#2A1B13]">
            Account Setting
          </h1>
  
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full mb-2"></div>
            <button className="border border-gray-300 text-gray-700 px-4 py-1 rounded-md text-sm">
              Change Profile Picture
            </button>
          </div>
  
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="font-semibold">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
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
                type="text"
                placeholder="7-7-2005"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <div>
              <label className="font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="000-000-0000"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <div>
              <label className="font-semibold">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="BangMod"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <div>
              <label className="font-semibold">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="username@gmail.com"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
          </form>
  
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#2A1B13] text-white px-6 py-2 rounded-md">
              Save Change
            </button>
            <button className="border border-gray-400 px-6 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </div>
      </div>
        
    </div>
  );
}
