import Link from "next/link";
import React from "react";
// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 bg-spotify-black w-full md:ml-64 md:w-[calc(100%-256px)] flex items-center justify-between p-8">
      <div className="flex items-center gap-6">
        <Link href="#">
          <IoIosArrowBack className="text-2xl" />
        </Link>
        <Link href="#">
          <IoIosArrowForward className="text-2xl" />
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="#" className="hover:font-bold">
          Register
        </Link>
        <Link
          href="#"
          className="border px-8 py-2 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
