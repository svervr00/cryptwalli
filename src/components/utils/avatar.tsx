"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AvatarProps {
  color?: string;
  imageUrl: string;
  onClick?: ()=>void
}

export default function Avatar({ imageUrl, color="white" }: AvatarProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    router.push("/");
  };
  const handleDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center gap-4 relative" ref={menuRef}>
       <span className={`text-${color}`}>BLARD</span>
      <button onClick={() => setShowMenu(!showMenu)}>
       
        <Image
          src={imageUrl}
          alt="avatar"
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
      </button>

      {showMenu && (
        <div className="absolute top-14 right-0 bg-[#5c4efc] border border-white rounded-md shadow-lg text-white/80">
          <button
            onClick={handleDashboard}
            className="w-full text-left px-6 py-2 hover:bg-white/10"
          >
            Dashboard
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left px-6 py-2 hover:bg-white/10"
          >
            Logout
          </button>
          
        </div>
      )}
    </div>
  );
}
