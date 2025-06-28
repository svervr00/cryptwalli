import { FC } from "react";
import Table from "./table";
import RecentTableRow from "./recent.row";

interface RecentTableProps {
  headingData: string[];
  data: {
    id: number;
    cases: string
    user: {
      image: string;
      name: string;
    };
    date: string;
  }[];
}

const RecentTable: FC<RecentTableProps> = ({ headingData, data }) => {
  return (
    <div className="mt-8">
      <Table columns={`grid grid-cols-${headingData.length} gap-4`}>
        {/* Dynamic Header Rendering */}
        <Table.Header bgColor="">
          {headingData.length > 0 &&
            headingData.map((heading, index) => (
              <div
                key={index}
                className="text-slate-400 font-semibold uppercase text-xs md:text-sm text-start"
              >
                {heading}
              </div>
            ))}
        </Table.Header>

        {/* Dynamic Row Rendering */}
        {data.map((item) => (
          <RecentTableRow
            key={item.id}
            index={item.id}
            cases={item.cases}
            user={item.user}
            date={item.date}
          />
        ))}
      </Table>
    </div>
  );
};

export default RecentTable;
