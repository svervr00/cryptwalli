// "use client"

// import { useState, useEffect } from "react";
// import Header from "@/components/dashboard/header";
// import SideNav from "@/components/dashboard/sidenav";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isSideNavOpen, setIsSideNavOpen] = useState(true);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 960);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <Header
//         isMobile={isMobile}
//         isSideNavOpen={isSideNavOpen}
//         toggleSideNav={() => setIsSideNavOpen(!isSideNavOpen)}
//       />
//       <SideNav
//         isMobile={isMobile}
//         isSideNavOpen={isSideNavOpen}
//         hideSideNav={setIsSideNavOpen}
//       />
//       <main
//         className={`pt-[72px] bg-[#f3f4f6] text-white/80 font-cera min-h-screen transition-all duration-300 ${
//           isMobile ? "w-full" : isSideNavOpen ? "ml-[300px] w-[calc(100%-300px)]" : "ml-0 w-full"
//         }`}
//       >
//         <div className="p-6">{children}</div>
//       </main>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Header from "@/components/dashboard/header";
import SideNav from "@/components/dashboard/sidenav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 960);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Header
        isMobile={isMobile}
        isSideNavOpen={isSideNavOpen}
        toggleSideNav={() => setIsSideNavOpen(!isSideNavOpen)}
      />
      <SideNav
        isMobile={isMobile}
        isSideNavOpen={isSideNavOpen}
        hideSideNav={setIsSideNavOpen}
      />
      <main
        className={`pt-[72px] bg-[#f3f4f6] text-white/80 font-cera min-h-screen transition-all duration-300 ${
          isMobile ? "w-full" : isSideNavOpen ? "ml-[300px] w-[calc(100%-300px)]" : "ml-0 w-full"
        }`}
      >
        <div className="p-6">{children}</div>
      </main>
    </>
  );
}

