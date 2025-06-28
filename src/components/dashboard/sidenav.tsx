"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PanelRightOpen,
  LayoutDashboard,
  Wallet,
  ListOrdered,
  Clock3,
  LucideBellRing,
  Settings
} from "lucide-react";
// import UpgradeButton from "../components/UpgradeButton";

interface SideNavProps {
  isMobile: boolean;
  isSideNavOpen: boolean;
  hideSideNav: (value: boolean) => void;
}

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Wallet", icon: Wallet, path: "/wallet" },
  { label: "Transactions", icon: ListOrdered, path: "/transactions" },
  { label: "Coins", icon: Clock3, path: "/coins" },
  { label: "Notifications", icon: LucideBellRing, path: "/notifications" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const SideNav = ({ isMobile, isSideNavOpen, hideSideNav }: SideNavProps) => {
  const pathname = usePathname();

  return (
    <>
      {isSideNavOpen && isMobile && (
        <div
          className="fixed inset-0  lg:hidden z-10"
          onClick={() => hideSideNav(false)}
        ></div>
      )}
      <div
        className={`fixed left-0 top-0 w-full max-w-[300px] h-svh flex flex-col z-50 
        font-OpenSans tracking-normal text-[14px] text-white/90
        bg-[#5c4efc] transition-transform duration-300 ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full px-2 py-[12px] text-center">
          <div className="flex justify-between p-1 gap-6 mt-3 mb-12">
            <button
              className="opacity-60 hover:opacity-80 hover:bg-white/15 p-2 rounded-md"
              onClick={() => hideSideNav(false)}
            >
              <PanelRightOpen />
            </button>
          </div>
          <div
            className="relative w-auto mx-3 bg-white/10 font-light text-[14px] px-[10px] mt-4
                backdrop-blur-[143.12px] h-[32px] border border-white/50 overflow-hidden rounded-full"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full p-1 focus:outline-none  bg-transparent"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto hide-scrollbar relative font-thin text-[12px] tracking-wider">
          <nav className="flex flex-col space-y-1 px-4 py-2">
            {navItems.map(({ label, icon: Icon, path }) => (
              <Link key={label} href={path} onClick={() => hideSideNav(false)}>
                <div
                  className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-white/10 ${
                    pathname === path ? "bg-white/10" : ""
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>

        <div className="w-full flex h-[120px] items-center bg-white/0 px-4 font-OpenSans font-thin">
          {/* <UpgradeButton /> */}
          Logout
        </div>
      </div>
    </>
  );
};

export default SideNav;
