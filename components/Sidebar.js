import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      <div>
        <Image
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
          width={250}
          height={100}
          alt="logo spotify"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
