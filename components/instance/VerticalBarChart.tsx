import { useState, useMemo } from "react";
import * as chartjs from "chart.js";
import { Bar, ChartData } from "react-chartjs-2";

import { ValueOf } from "@/types/general";
import {
  SESSION_ACTIVITY_CHART_TYPE,
  SESSION_ACTIVITY_CHART_VIEW,
} from "@/constants/sessonHistory";
import { TSessionActivityChart } from "@/types/sessionHistory";

const VerticalBarChart = ({ data }: { data: TSessionActivityChart }) => {
  const [selectedView, setSelectedView] = useState<
    ValueOf<typeof SESSION_ACTIVITY_CHART_TYPE>
  >(SESSION_ACTIVITY_CHART_TYPE.YEAR);
  const chartData = useMemo(() => {
    const chartSelected = data[0];
    return {
      labels: chartSelected.value.map(({ label }) => label),
      datasets: [
        {
          label: chartSelected.type,
          data: chartSelected.value.map(({ value }) => value),
          backgroundColor: "#7D99E2",
          barThickness: 20,
        },
      ],
    } as ChartData<chartjs.ChartData>;
  }, [data]);

  return (
    <div className="w-full flex flex-col mt-8 border border-gray-800 bg-bgCardSecondary p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">Session Activity</h2>
        <ul className="text-[10px] flex gap-2">
          {SESSION_ACTIVITY_CHART_VIEW.map((viewType) => (
            <li key={viewType}>
              <button
                className={`p-1 rounded-sm ${
                  selectedView === viewType
                    ? "bg-tertiary"
                    : "bg-bgCardTertiary"
                }`}
                onClick={() => setSelectedView(viewType)}
              >
                {viewType}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[300px] overflow-x-scroll">
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontColor: "#7D99E2",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default VerticalBarChart;
