// We can easily add shimmer here. which will look much better.

import { INSTANCE_ACTIVITY_LIST } from "@/constants/instance";
import { SESSION_AGGREGATION } from "@/constants/sessonHistory";

const Loader = () => {
  return (
    <div className="flex justify-between w-full">
      <div>
        <div className="animate-pulse hidden p-4 xl:flex flex-col rounded-lg w-96 min-w-96 mt-8 mr-4 border border-gray-800">
          <div className="flex flex-col w-full h-24">
            <div className="h-6 w-full bg-bgCardTertiary rounded-md"></div>
            <div className="h-6 w-full bg-bgCardTertiary rounded-md mt-4"></div>
          </div>
          <div className="w-full">
            {INSTANCE_ACTIVITY_LIST.map(({ label }) => (
              <div
                key={label}
                className="h-8 mt-4 w-full bg-bgCardTertiary rounded-md"
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="shadow rounded-md w-full flex flex-col pt-4">
        <div className="w-full pt-4">
          <h2 className="text-3xl">Session History</h2>
          <ul className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-4 w-full animate-pulse">
            {Object.keys(SESSION_AGGREGATION).map((key) => (
              <li
                key={key}
                className="w-full border border-gray-800 bg-bgCardSecondary rounded-md p-4 pb-8 flex flex-col items-stretch h-full"
              >
                <div className="h-6 w-full bg-bgCardTertiary rounded-md"></div>
                <p className="mt-4 h-6 w-1/2 bg-bgCardTertiary rounded-md"></p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col mt-8 border border-gray-800 p-4 rounded-md">
          <div className="flex w-full flex-col">
            <h2 className="text-3xl">Session Activity</h2>
            <div className="h-[300px] animate-pulse bg-bgCardTertiary mt-4 rounded-md w-full"></div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-8 border border-gray-800 p-4 rounded-md">
          <div className="flex w-full flex-col">
            <h2 className="text-3xl">Session History</h2>
            <div className="h-8 animate-pulse bg-bgCardTertiary mt-4 rounded-md w-full"></div>
            <div className="h-8 animate-pulse bg-bgCardTertiary mt-4 rounded-md w-full"></div>
            <div className="h-8 animate-pulse bg-bgCardTertiary mt-4 rounded-md w-full"></div>
            <div className="h-8 animate-pulse bg-bgCardTertiary mt-4 rounded-md w-full"></div>
            <div className="h-8 animate-pulse bg-bgCardTertiary mt-4 rounded-md w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
