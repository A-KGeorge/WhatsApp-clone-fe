import { useState } from "react";
import ReturnIcon from "./../../../svg/Return";
import SearchIcon from "./../../../svg/Search";
import FilterIcon from "../../../svg/FilterIcon";

export default function Search({ searchLength }) {
  const [show, setShow] = useState();
  const handleSearch = () => {};
  return (
    <div className="h-[40px] py-1.5 ">
      {/* Container */}
      <div className="px-[10px]">
        {/* search input container */}
        <div className="flex items-center gap-x-2">
          <div className="w-full flex dark:bg-dark_bg_2 rounded-lg pl-2">
            {show || searchLength > 0 ? (
              <span className="w-8 flex items-center justify-center rotateAnimation">
                <ReturnIcon className="fill-green_1 w-5" />
              </span>
            ) : (
              <span className="w-8 flex items-center justify-center">
                <SearchIcon className="dark:fill-dark_svg_2 w-5" />
              </span>
            )}
            <input
              type="text"
              placeholder="Search or start a new chat"
              className="input"
              onFocus={() => setShow(true)}
              onBlur={() => searchLength === 0 && setShow(false)}
              onKeyDown={(e) => handleSearch(e)}
            />
          </div>
          <button className="btn">
            <FilterIcon className="dark:fill-dark_svg_2" />
          </button>
        </div>
      </div>
    </div>
  );
}
