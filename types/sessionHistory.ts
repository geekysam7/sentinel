import {
  SESSION_ACTIVITY_CHART_TYPE,
  SESSION_AGGREGATION,
  SESSION_INDICATOR_TYPE,
} from "@/constants/sessonHistory";
import { TNodes, ValueOf } from "./general";

type TSessionHistoryAggregation = {
  label: ValueOf<typeof SESSION_AGGREGATION>;
  value: string;
  indicatorPercent: string;
  indicatorType: ValueOf<typeof SESSION_INDICATOR_TYPE>;
}[];

type TSessionActivityChart = {
  type: ValueOf<typeof SESSION_ACTIVITY_CHART_TYPE>;
  value: {
    label: string;
    value: number;
  }[];
}[];

type TTSessionHistory = {
  startTime: number;
  endTime: number;
  node: TNodes;
  dataConsumed: number;
  location: string;
}[];

export type {
  TSessionHistoryAggregation,
  TSessionActivityChart,
  TTSessionHistory,
};
