import Image from "next/image";
import { SearchIcon, MenuIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="sticky top-0 z-50 shadow-md px-2 md:px-0 bg-white">
      <header className="grid grid-cols-2 md:grid-cols-3   p-5 md:px-10">
        <div className="relative flex items-center h-10 cursor-pointer my-auto ">
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="hidden md:inline-flex items-center border-2 rounded-full py-2 pl-5">
          <input
            type="text"
            placeholder="Search here"
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
    </div>
  );
}

export default Header;
