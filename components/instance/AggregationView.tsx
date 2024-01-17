import { SESSION_INDICATOR_TYPE } from "@/constants/sessonHistory";
import { TSessionHistoryAggregation } from "@/types/sessionHistory";

const AggregationView = ({ data }: { data: TSessionHistoryAggregation }) => {
  return (
    <div className="w-full mt-8">
      <h2 className="text-3xl">Session History</h2>
      <ul className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-4">
        {data.map(({ label, indicatorPercent, indicatorType, value }) => (
          <li
            key={label}
            className="border border-gray-800 bg-bgCardSecondary rounded-md p-4 pb-8 flex flex-col items-stretch h-full"
          >
            <div className="flex justify-between items-start w-full h-12 break-words">
              <div className="text-sm text-textSecondary pr-2">{label}</div>
              <div
                className={`text-xs ${
                  indicatorType === SESSION_INDICATOR_TYPE.INC
                    ? "text-success"
                    : "text-danger"
                } font-bold`}
              >
                {indicatorType === SESSION_INDICATOR_TYPE.INC ? "+" : "-"}
                {indicatorPercent}%
              </div>
            </div>
            <p className="pt-4">{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AggregationView;
