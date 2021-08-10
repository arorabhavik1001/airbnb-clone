import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker, DateRange } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({placeholder}) {
  const router = useRouter();
  const [userSearch, setUserSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: userSearch,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests
      },
    });
    setUserSearch("")
  };
  return (
    <div className="sticky top-0 z-50 shadow-md px-2 md:px-0 bg-white">
      <header className="grid grid-cols-2 md:grid-cols-3 p-5 md:px-10">
        <div className="relative flex items-center h-10 cursor-pointer my-auto ">
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="hidden md:inline-flex items-center border-2 rounded-full py-2 pl-5">
          <input
            type="text"
            placeholder={placeholder || "Search here"}
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
            className="bg-transparent flex-grow outline-none text-md text-gray-600 placeholder-gray-400"
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-5" />
        </div>
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline-flex cursor-pointer">Become a Host</p>
          <HomeIcon className="inline-flex md:hidden h-6 cursor-pointer" />
          <GlobeAltIcon className="h-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-xl">
            <MenuIcon className="h-6 cursor-pointer" />
            <UserCircleIcon className="h-6 cursor-pointer" />
          </div>
        </div>
      </header>
      <div className="inline-flex md:hidden flex flex-grow w-full items-center border-2 rounded-full py-2 pl-5 justify-center mb-3 mt-0  ">
        <input
          type="text"
          placeholder="Search here"
          className="bg-transparent flex-grow outline-none text-md text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-5" />
      </div>
      {userSearch ? (
        <div className="grid grid-cols-3">
          <div className="flex sm:hidden flex-col col-span-3 mx-auto ">
            <DateRange
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleChange}
              showPreview={false}
            />
            {/* <div className="flex sm:hidden items-center border-b mb-4">
              <h2 className=" text-lg flex-grow font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-400"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                min={1}
              />
            </div> */}
          </div>
          <div className="hidden sm:flex flex-col col-span-3 mx-auto ">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleChange}
              showPreview={false}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-400"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                min={1}
              />
            </div>
            <div className="flex mb-4">
              <button
                className="flex-grow text-gray-500"
                onClick={() => setUserSearch("")}
              >
                Cancel
              </button>
              <button className="flex-grow text-red-400" onClick={search}>
                Search
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
