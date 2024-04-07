import React from "react";

export default function Footer() {
  return (
    <div className=" h-20 ">
      <div className="min-w-[520px] max-w-[1280px] mx-auto h-full flex items-center">
        <div className="flex gap-5">
          <p className="text-lg font-bold">© 2024</p>
          <p className="text-lg font-bold cursor-pointer">Twitter</p>
          <p className="text-lg font-bold cursor-pointer">LinkedIn</p>
          <p className="text-lg font-bold cursor-pointer">Facebook</p>
        </div>
      </div>
    </div>
  );
}
