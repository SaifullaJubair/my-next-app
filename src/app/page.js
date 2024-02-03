import Counter from "@/components/Counter/Counter";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      This is home page
      <Counter />
      <Link href="/about">
        <button className="bg-blue-500 px-2 py-1 rounded my-2">About</button>
      </Link>
      <Link href="/contact">
        <button className="bg-blue-500 px-2 py-1 rounded my-2">Contact</button>
      </Link>
      <Link href="/album">
        <button className="bg-blue-500 px-2 py-1 rounded my-2">Album</button>
      </Link>
    </div>
  );
};

export default HomePage;
