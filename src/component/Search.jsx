import React, { useState } from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import {AiOutlineSearch} from 'react-icons/ai'
const Search = () => {
    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e) => {
        if(e.target.value == ''){
            setActiveSearch([])
            return false;
        }
        setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0,8))

    }
  return (
    // <div className="h-[150px] w-[300px] items-center justify-center bg-white p-4 lg:h-[80px] lg:w-full">
    //   <div className="flex flex-col w-full h-full lg:flex-row gap-6 items-center">
    //     <div className="flex-1 lg:border-r">
    //       <CheckIn /> 
    //     </div>
    //     <div className="flex-1 lg:border-r">
    //       <CheckOut />
    //     </div>
    //   </div>

    //   <form className="max-w-md mx-auto ">
    //     <label
    //       for="default-search"
    //       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    //     >
    //       Search
    //     </label>

    //     <div className="relative">
    //       <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    //         <svg
    //           className="w-4 h-4 text-gray-500 dark:text-gray-400"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 20 20"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    //           />
    //         </svg>
    //       </div>
    //       <input
    //         type="search"
    //         id="default-search"
    //         className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="Search "
    //         required
    //       />
    //       <button
    //         type="submit"
    //         class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Search
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <form className="w-full relative">
      <div className="relative">
        <input 
        type="serch"
        placeholder="Search"
        className="w-full p-4 rounded-full bg-white"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#362518] rounded-full">
        <AiOutlineSearch className="text-white"/>
        </button>
      </div>
    </form>
  );
};

export default Search;
