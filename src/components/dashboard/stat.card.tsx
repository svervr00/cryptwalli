import { FC } from "react";


type StatData22 = {
  title: string;
  caseValue: number | string | React.JSX.Element; 
  color: string; 
  isGain?: boolean; 
  text?: string; 
  percent?: number; 
};


const StatCard: FC<StatData22> = ({ title, caseValue, color, isGain, text, percent }) => {
  // console.log(color);

  const bgColorClass = {
    red: "bg-red-100",
    green: "bg-green-100",
    blue: "bg-blue-100",
    yellow: "bg-yellow-100",
  }[color];

  const textColorClass = {
    red: "text-red-700",
    green: "text-green-700",
    blue: "text-blue-700",
    yellow: "text-yellow-700",
  }[color];

  return (
    <div className="bg-white  p-4 grid rounded-2xl shadow-md border font-thin  grid-rows-[auto_auto] ">
      <div className="space-y-4">
          <div className="text-xl text-gray-600">{title}</div>
        <div className={`text-2xl text-center font-bold text-gray-800 py-2 rounded-xl ${bgColorClass} ${textColorClass}`}>{isGain? caseValue+"%" : "$"+caseValue.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default StatCard;

