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
import { NODE_VS_CONFIG } from "@/constants/general";
import { TTSessionHistory } from "@/types/sessionHistory";

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
      const nodeClassName = NODE_VS_CONFIG[nodeValue];
      return (
        <div
          className={`p-1 w-20 flex justify-center items-center text-ellipsis rounded-sm ${nodeClassName}`}
        >
          {nodeValue}
        </div>
      );
    },
    size: 250,
  }),
  columnHelper.accessor("dataConsumed", {
    cell: (info) => `${info.getValue()} MB`,
    size: 200,
  }),
  columnHelper.accessor("location", {
    cell: (info) => info.getValue(),
    size: 150,
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
        <table className="border-separate border-spacing-4 w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    align="left"
                    className="text-gray-400 font-semibold text-sm"
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
                    className={`text-sm text-textSecondary`}
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
