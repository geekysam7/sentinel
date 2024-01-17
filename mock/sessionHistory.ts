import { NODES } from "@/constants/general";
import {
  SESSION_ACTIVITY_CHART_TYPE,
  SESSION_AGGREGATION,
  SESSION_INDICATOR_TYPE,
} from "@/constants/sessonHistory";
import { TNodes, ValueOf } from "@/types/general";

const sessionHistoryMock: {
  startTime: number;
  endTime: number;
  node: TNodes;
  dataConsumed: number;
  location: string;
}[] = [
  {
    startTime: 1705490053237, // assuming startTime can be used to find date.
    endTime: 1705490056237,
    node: NODES.WIREGUARD,
    dataConsumed: 0.15,
    location: "Singapore",
  },
  {
    startTime: 1705490053237,
    endTime: 1705490056237,
    node: NODES.WIREGUARD,
    dataConsumed: 0.15,
    location: "Singapore",
  },
  {
    startTime: 1705490053237,
    endTime: 1705490056237,
    node: NODES.WIREGUARD,
    dataConsumed: 0.15,
    location: "Singapore",
  },
  {
    startTime: 1705490053237,
    endTime: 1705490056237,
    node: NODES.V2RAY,
    dataConsumed: 0.15,
    location: "Singapore",
  },
  {
    startTime: 1705490053237,
    endTime: 1705490056237,
    node: NODES.V2RAY,
    dataConsumed: 0.15,
    location: "Singapore",
  },
  {
    startTime: 1705490053237,
    endTime: 1705490056237,
    node: NODES.V2RAY,
    dataConsumed: 0.15,
    location: "Singapore",
  },
  {
    startTime: 1705490053237,
    endTime: 1705490056237,
    node: NODES.OPENVPN,
    dataConsumed: 0.15,
    location: "Singapore",
  },
];

const sessionHistoryAggregation: {
  label: ValueOf<typeof SESSION_AGGREGATION>;
  value: string;
  indicatorPercent: string;
  indicatorType: ValueOf<typeof SESSION_INDICATOR_TYPE>;
}[] = [
  {
    label: SESSION_AGGREGATION.ACTIVE_SESSIONS,
    value: "10 H",
    indicatorPercent: "12.21",
    indicatorType: SESSION_INDICATOR_TYPE.INC,
  },
  {
    label: SESSION_AGGREGATION.TOTAL_SESSIONS,
    value: "100 H",
    indicatorPercent: "2.21",
    indicatorType: SESSION_INDICATOR_TYPE.DEC,
  },
  {
    label: SESSION_AGGREGATION.HIGHEST_ACTIVE_SESSIONS,
    value: "10 H",
    indicatorPercent: "12.21",
    indicatorType: SESSION_INDICATOR_TYPE.INC,
  },
  {
    label: SESSION_AGGREGATION.LONGEST_SESSION,
    value: "12 H : 31 M : 2 S", // convert from epoch later
    indicatorPercent: "2.21",
    indicatorType: SESSION_INDICATOR_TYPE.DEC,
  },
];

// two ways data can come for year:
// JAN => 0 or Jan itself.
// day => 0 to 24hr
// month => 0 to no. of days.
const sessionActivityChart: {
  type: ValueOf<typeof SESSION_ACTIVITY_CHART_TYPE>;
  value: {
    label: string;
    value: number;
  }[];
}[] = [
  {
    type: SESSION_ACTIVITY_CHART_TYPE.YEAR,
    value: [
      {
        label: "JAN",
        value: 25,
      },
      {
        label: "FEB",
        value: 50,
      },
      {
        label: "MAR",
        value: 70,
      },
      {
        label: "APR",
        value: 28,
      },
      {
        label: "MAY",
        value: 55,
      },
      {
        label: "JUN",
        value: 78,
      },
      {
        label: "JUL",
        value: 50,
      },
      {
        label: "AUG",
        value: 84,
      },
      {
        label: "SEP",
        value: 54,
      },
      {
        label: "OCT",
        value: 58,
      },
      {
        label: "NOV",
        value: 18,
      },
      {
        label: "DEC",
        value: 50,
      },
    ],
  },
];

export { sessionHistoryMock, sessionHistoryAggregation, sessionActivityChart };
