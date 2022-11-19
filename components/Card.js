import React from "react";
import Image from "next/image";
//Icons
import { BiPlay } from "react-icons/bi";

const Card = () => {
  return (
    <div className="bg-spotify-lightblack rounded-lg p-4 hover:bg-gray-500/20 transition-all group">
      <div className="mb-4 relative">
        <Image
          src="https://lastfm.freetls.fastly.net/i/u/770x0/ca88bc4b4f89445a87ee70a3d25adb04.jpg"
          width={300}
          height={300}
          alt="album Guns N' Roses"
          className="rounded-lg drop-shadow-2xl mx-auto"
        />
        <button className="absolute right-4 bottom-4 p-3 text-spotify-gray text-3xl bg-spotify-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <BiPlay />
        </button>
      </div>
      <div className="pt-2">
        <h5 className="text-lg font-bold mb-2">Todays Top Hits</h5>
        <p className="text-sm text-gray-400 w-[18ch]">
          Appetite is on top of the Hottest 50!
        </p>
      </div>
    </div>
  );
};

export default Card;
