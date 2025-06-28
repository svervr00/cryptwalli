"use client";

import { PanelRightClose, PanelRightOpen } from "lucide-react";
import Avatar from "../utils/avatar";

export default function Header({
  isMobile,
  toggleSideNav,
  isSideNavOpen,
}: {
  isMobile: boolean;
  toggleSideNav: () => void;
  isSideNavOpen: boolean;
}) {
  

  return (
    <header
      className={`fixed top-0 transition-all duration-300 ease-in-out z-20
      ${isMobile ? "w-full" : isSideNavOpen ? "left-[300px] w-[calc(100%-300px)]" : "left-0 w-full"}
      h-[72px] px-6 flex items-center justify-between bg-[#5c4efc] shadow-md border-b border-white/10`}
    >
      <div className="flex items-center gap-4 text-white">
        <button className="hover:bg-white/10 p-2 rounded-md" onClick={toggleSideNav}>
          {isSideNavOpen ? <PanelRightClose /> : <PanelRightOpen />}
        </button>
        <h1 className="text-lg font-semibold tracking-wide">CryptWalli Dashboard</h1>
      </div>

      <div className="flex items-center gap-4 relative">
      <Avatar imageUrl="/Profile/Profile3.jpg"/>
      </div>
      
    </header>
  );
}
