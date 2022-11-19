import Link from "next/link";
import React from "react";
import Card from "./Card";

const ListAlbums = (props) => {
  const { title, albums } = props;

  return (
    <Link href="#">
      <div className="flex items-center justify-between mt-8 mb-8">
        <Link href="/" className="text-3xl font-bold hover:underline">
          {title}
        </Link>
        <Link href="/" className="uppercase text-sm tracking-[2px] hover:underline">See everything</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Link>
  );
};

export default ListAlbums;
