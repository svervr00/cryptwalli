// import { FC, useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchCaseStats } from "../../../services/managerServices";
// import { useAppContext } from "../../../context/AppContext";
// import StatCard from "./stat.card";
// import { FaChartLine, FaUsers } from "react-icons/fa";
// import { IoTimerOutline } from "react-icons/io5";
// import { LuBox } from "react-icons/lu";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import toast from "react-hot-toast";

// const DashboardStats: FC = () => {
//   const { tenant } = useAppContext();
//   const [statsData, setStatsData] = useState([
//     {
//       icon: <FaChartLine />,
//       title: "Total Active Cases",
//       caseValue: 0,
//       color: "green",
//       isGain: false,
//       text: "Down this year",
//       percent: 4.3,
//     },
//     {
//       icon: <FaUsers />,
//       title: "Unassigned Cases",
//       caseValue: 0,
//       color: "blue",
//       isGain: true,
//       text: "Up this month",
//       percent: 8.5,
//     },
//     {
//       icon: <IoTimerOutline />,
//       title: "Alert Awaiting Review",
//       caseValue: 0,
//       color: "red",
//       isGain: true,
//       text: "Up from yesterday",
//       percent: 1.8,
//     },
//     {
//       icon: <LuBox />,
//       title: "Cases Closed This Month",
//       caseValue: 0,
//       color: "yellow",
//       isGain: true,
//       text: "Up from past month",
//       percent: 1.3,
//     },
//   ]);

//   // Fetch statistics using react-query
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["caseStats", tenant],
//     queryFn: () => fetchCaseStats(tenant),
//     enabled: !!tenant,
//   });
  

//   useEffect(() => {
//     if (data) {
//       const updatedStats = [...statsData];
//       updatedStats[0].caseValue = data?.totalActive;
//       updatedStats[1].caseValue = data?.totalUnassigned;
//       updatedStats[2].caseValue = data?.alertsAwaitingReview;
//       updatedStats[3].caseValue = data?.totalClosedThisMonth;
//       setStatsData(updatedStats);
//     }
//   }, [data]);

//   if (error) {
//     toast.error("Failed to fetch case stats. Please try again later.");
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {statsData.map((stat, index) => (
//         <StatCard
//           key={index}
//           icon={stat.icon}
//           title={stat.title}
//           caseValue={isLoading ? <Skeleton width={50} /> : stat?.caseValue}
//           color={stat.color}
//           isGain={stat.isGain}
//           text={stat.text}
//           percent={stat.percent}
//         />
//       ))}
//     </div>
//   );
// };

// export default DashboardStats;

import { FC, useEffect, useState } from "react";
import StatCard from "./stat.card";
import { FaChartLine, FaUsers } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import "react-loading-skeleton/dist/skeleton.css";

const mockStats = {
  totalActive: 4800,
  totalUnassigned: 14000,
  alertsAwaitingReview: 9200,
  totalClosedThisMonth: 6.2,
};

const DashboardStats: FC = () => {
  const [statsData, setStatsData] = useState([
    {
      icon: <FaChartLine />,
      title: "Account Balance",
      caseValue: 0,
      color: "green",
      isGain: false,
      text: "Down this year",
      percent: 4.3,
    },
    {
      icon: <FaUsers />,
      title: "Total Credit",
      caseValue: 0,
      color: "blue",
      isGain: false,
      text: "Up this month",
      percent: 8.5,
    },
    {
      icon: <IoTimerOutline />,
      title: "Withdrawals",
      caseValue: 0,
      color: "red",
      isGain: false,
      text: "Up from yesterday",
      percent: 1.8,
    },
    {
      icon: <LuBox />,
      title: "Profit",
      caseValue: 0,
      color: "yellow",
      isGain: true,
      text: "Up from past month",
      percent: 1.3,
    },
  ]);

  useEffect(() => {
    setStatsData(prevStats => {
      const updatedStats = [...prevStats];
      updatedStats[0] = { ...updatedStats[0], caseValue: mockStats.totalActive };
      updatedStats[1] = { ...updatedStats[1], caseValue: mockStats.totalUnassigned };
      updatedStats[2] = { ...updatedStats[2], caseValue: mockStats.alertsAwaitingReview };
      updatedStats[3] = { ...updatedStats[3], caseValue: mockStats.totalClosedThisMonth };
      return updatedStats;
    });
  }, []); // empty dependency array to run once on mount

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          caseValue={stat.caseValue}
          color={stat.color}
          isGain={stat.isGain}
          text={stat.text}
          percent={stat.percent}
        />
      ))}
    </div>
  );
};

export default DashboardStats;
