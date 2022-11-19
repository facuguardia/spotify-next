import Image from "next/image";
import Link from "next/link";
//Icons
import { AiFillHome, AiOutlinePlusCircle } from "react-icons/ai";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

const Sidebar = (props) => {
  const { sidebarOpen, setSidebarOpen } = props;

  return (
    <div
      className={`bg-black fixed top-0 w-64 h-full p-6 flex flex-col justify-between ${
        sidebarOpen ? "left-0" : "-left-full"
      } md:left-0 transition-all duration-300 z-50`}
    >
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed right-4 bottom-4 text-xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {sidebarOpen ? <RiCloseFill /> : <RiMenu3Fill />}
      </div>
      <div>
        <div className="mt-4 mb-8 ">
          <Image
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
            width={140}
            height={150}
            alt="logo spotify"
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="#" className="flex items-center gap-3 mt-4">
                <AiFillHome className="text-2xl" /> Home
              </Link>
              <Link href="#" className="flex items-center gap-3 mt-4">
                <BsSearch className="text-2xl" /> Search
              </Link>
              <Link href="#" className="flex items-center gap-3 mt-4">
                <BiLibrary className="text-2xl" /> Your Library
              </Link>
            </li>
            <li className="pt-8">
              <Link href="#" className="flex items-center gap-3 mt-4">
                <AiOutlinePlusCircle className="text-2xl" /> Create playlist
              </Link>
              <Link href="#" className="flex items-center gap-3 mt-4">
                <FcLike className="text-2xl" /> Your likes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col">
        <Link href="#" className="text-sm text-gray-50/50 pb-2">
          Cookies
        </Link>
        <Link href="#" className="text-sm text-gray-50/50">
          Privacy
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
