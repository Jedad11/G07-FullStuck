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
