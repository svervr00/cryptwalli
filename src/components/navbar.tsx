"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../public/Images/Logo(1).jpg";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import { useState, useCallback } from "react";
import { User2Icon } from "lucide-react";
import Avatar from "./utils/avatar";


export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<boolean>(true);

  const handleSectionNav = useCallback(
    (sectionId: string) => {
      router.push(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    [router]
  );

  const toggleLogin = () =>{
    setUser((user)=>!user)
  }

  return (
    <nav className="bg-white text-[#2c2c2c] shadow-md mt-8 mx-4 rounded-md">
      <div className="mx-auto lg:p-2 lg:h-16 p-1 h-12 flex items-center justify-between">
        <button
          className="lg:hidden ml-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="h-8 w-8 text-black" />
        </button>
        <div className="flex-1 lg:flex items-center lg:gap-12 font-medium justify-start lg:ml-4 hidden">
          <Link
            href="/"
            className="text-[#5c4efc] border-b-2 border-[#5c4efc] lg:pb-1 lg:text-xl"
          >
            HOME
          </Link>
          <button
            onClick={() => handleSectionNav("about")}
            className="lg:text-xl hover:text-[#5c4efc]"
          >
            ABOUT
          </button>
          <button
            onClick={() => handleSectionNav("features")}
            className="lg:text-xl hover:text-[#5c4efc]"
          >
            FEATURES
          </button>
        </div>

        <div className=" flex items-center font-bold text-[#383092]">
          <Image
            src={logo}
            alt="CrypWalli Logo"
            className="w-full shadow-lg rounded-sm h-full"
          />
        </div>

        <div className="flex-1 hidden lg:flex items-center lg:-ml-16 justify-end lg:gap-6 font-medium mr-4">

        </div>
        {
          user ? <Avatar color="black" imageUrl="/Profile/Profile3.jpg" onClick={toggleLogin} /> : <Link
            href="/auth/login"
            className="bg-[#5c4efc] text-white lg:text-xl px-2 py-2 lg:px-4 lg:py-2 rounded border border-[#5c4efc] hover:bg-white hover:text-[#5c4efc] transition ml-6"
          >
            LOGIN
          </Link>
        }
      </div>
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 md:left-16 md:top-28 md:mt-12 md:z-50 z-20 mt-2 md:w-[267px]">
          <div className="bg-white items-start shadow-lg p-8 flex flex-col gap-6 relative">
            <button
              className="absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <XCircleIcon className="h-8 w-8 text-[#5c4efc]" />
            </button>
            <Link
              href="/"
              className="text-black text-sm hover:text-[#5c4efc]"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
            <button
              className="text-sm text-black hover:text-[#5c4efc]"
              onClick={() => {
                handleSectionNav("about");
                setMenuOpen(false);
              }}
            >
              ABOUT
            </button>
            <button
              className="text-sm text-black hover:text-[#5c4efc]"
              onClick={() => {
                handleSectionNav("features");
                setMenuOpen(false);
              }}
            >
              FEATURES
            </button>
            {
              user &&
              <Avatar imageUrl="/Profile/Profile3.jpg"/>
            }

          </div>
          <div
            className="flex-1"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          />
        </div>
      )}
    </nav>
  );
}
