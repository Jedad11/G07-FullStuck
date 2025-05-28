import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { searchResidentName } from "@/api/searchApi";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

const Search = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();  // <-- ใช้ navigate สำหรับเปลี่ยนหน้า

  useEffect(() => {
    if (input.trim() === "") {
      setResults([]);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const handler = setTimeout(async () => {
      try {
        const res = await searchResidentName(input);
        if (res.success) {
          setResults(res.data);
        } else {
          setError(res.msg);
          setResults([]);
        }
      } catch (err) {
        setError("Something went wrong");
        setResults([]);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(handler);
  }, [input]);

  // ฟังก์ชันสำหรับคลิกแต่ละ result
  const handleResultClick = (id) => {
    navigate(`/ResidentDetail/${id}`);
  };

  return (
    <form className="z-10 w-full relative" onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <input
          type="search"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 rounded-full bg-white"
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#362518] rounded-full"
          onClick={(e) => e.preventDefault()}
        >
          <AiOutlineSearch className="text-white" />
        </button>
      </div>

      {loading && <p className="mt-2 text-gray-500">Searching...</p>}

      {error && <p className="mt-2 text-red-500">{error}</p>}

      {!loading && !error && results.length > 0 && (
        <ul className="mt-4 max-h-60 overflow-auto bg-white rounded shadow p-4">
          {results.map((resident) => (
            <li
              key={resident.id}
              className="border-b border-gray-200 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleResultClick(resident.id)}  // <-- เพิ่ม onClick
            >
              {resident.residentName}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Search;
