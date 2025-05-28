import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div>
      {/* SEARCH BAR */}
      <div className="w-full flex md:w-auto items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image
          src={"/search.png"}
          width={14}
          height={14}
          alt="search"
          className=""
        />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="w-52 p-2 bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default TableSearch;
