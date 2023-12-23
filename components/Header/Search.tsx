"use client";

import SearchIcon from "@material-ui/icons/Search";

export default function Search() {
  return (
    <div className="flex flex-1 items-center rounded-[24px]">
      <input type="text" className="flex-1" />
      <SearchIcon className="p-[5px] h-[22px] bg-[#CD9042]"/>
    </div>
  )
}