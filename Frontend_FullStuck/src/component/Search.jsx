import React, { useState } from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import {AiOutlineSearch} from 'react-icons/ai'
const Search = () => {
    // const [activeSearch, setActiveSearch] = useState([])
    const [input, setInput] = useState("")

    const handleChange = (value) => {
      setInput(value)
    }
  return (

    <form className="z-10 w-full relative">
      <div className="relative">
        <input 
        type="serch"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
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
