import { useMemo } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { format } from "date-fns";

import { TNodes } from "@/types/general";
import { SESSION_HISTORY_COLUMNS } from "@/constants/sessonHistory";
import { TTSessionHistory } from "@/types/sessionHistory";
import NodeUsedItem from "./NodeUsedItem";

type TSessionTable = {
  startTime: number;
  date: number;
  duration: number;
  endTime: number;
  node: TNodes;
  dataConsumed: number;
  location: string;
};

const columnHelper = createColumnHelper<TSessionTable>();

const columns = [
  columnHelper.accessor("startTime", {
    cell: (info) => format(new Date(info.getValue()), "hh:mm:ss"),
    size: 300,
  }),
  columnHelper.accessor("date", {
    cell: (info) => format(new Date(info.getValue()), "dd-MM-yyyy"),
    size: 200,
  }),
  columnHelper.accessor("duration", {
    cell: (info) => `${info.getValue()} sec`,
    size: 200,
  }),
  columnHelper.accessor("node", {
    cell: (info) => {
      const nodeValue = info.getValue();
      return <NodeUsedItem value={nodeValue} />;
    },
    size: 250,
  }),
  columnHelper.accessor("dataConsumed", {
    cell: (info) => `${info.getValue()} MB`,
    size: 200,
  }),
  columnHelper.accessor("location", {
    cell: (info) => info.getValue(),
    size: 250,
  }),
];

const SessionTable = ({ data }: { data: TTSessionHistory }) => {
  const sessionData = useMemo(() => {
    return data.map(({ startTime, endTime, ...rest }) => ({
      startTime,
      duration: (endTime - startTime) / 1000,
      endTime,
      date: startTime,
      ...rest,
    }));
  }, [data]);

  const table = useReactTable({
    data: sessionData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
  });

  return (
    <div className="w-full flex flex-col mt-8 border border-gray-800 bg-bgCardSecondary rounded-md overflow-x-scroll">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-3xl">Session History</h2>
      </div>
      <div className="w-full min-w-[700px] overflow-x-auto">
        <table className="border-separate border-spacing-y-4 w-full">
          <thead className="bg-bgCardTertiary">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="px-4">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    align="left"
                    className="text-gray-400 font-semibold text-sm p-4 py-2"
                    style={{ position: "relative", width: header.getSize() }}
                  >
                    {header.isPlaceholder
                      ? null
                      : SESSION_HISTORY_COLUMNS[header.id]}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`text-sm text-textSecondary px-4`}
                    style={{ width: cell.column.getSize() }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SessionTable;
