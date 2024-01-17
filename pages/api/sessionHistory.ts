// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  sessionHistoryMock,
  sessionHistoryAggregation,
  sessionActivityChart,
} from "@/mock/sessionHistory";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    history: sessionHistoryMock,
    aggregation: sessionHistoryAggregation,
    activityChart: sessionActivityChart,
  } as any);
}
