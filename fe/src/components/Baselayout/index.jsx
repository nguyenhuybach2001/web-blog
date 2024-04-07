import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { useSelector } from "react-redux";

export default function BaseLayout(props) {
  const switchTheme = useSelector((state) => state.switch.modeTheme);
  return (
    <div className={`${switchTheme ? "" : "bg-[#090D1F] text-white"} md:px-3`}>
      <div className="flex justify-between flex-col min-h-screen  min-w-[520px]  max-w-[1280px] mx-auto">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}
