import { useQuery } from "@tanstack/react-query";
import { Chakra_Petch } from "next/font/google";

import Heading from "@/components/instance/Heading";
import AggregationView from "@/components/instance/AggregationView";
import VerticalBarChart from "@/components/instance/VerticalBarChart";
import SessionTable from "@/components/instance/SessionTable";
import Sidebar from "@/components/instance/Sidebar";
import Loader from "@/components/Loader";

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

function useData() {
  return useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch("/api/sessionHistory");
      const data = await res.json();
      return data;
    },
  });
}

export default function Home() {
  const { data, isFetching } = useData();

  return (
    <main
      className={`w-screen min-h-screen bg-mainBg text-white flex flex-col items-center p-4 sm:p-10 ${chakraPetch.className}`}
    >
      <Heading />
      <div className="w-full flex flex-col xl:flex-row justify-between">
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <div>
              <Sidebar />
            </div>
            <div className="flex flex-col overflow-scroll bgRadialGradient">
              <AggregationView data={data.aggregation} />
              <VerticalBarChart data={data.activityChart} />
              <SessionTable data={data.history} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
