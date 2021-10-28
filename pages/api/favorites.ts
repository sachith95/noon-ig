import { data } from "../../DummyData/data";
import type { NextApiRequest, NextApiResponse } from "next";
const favorites = data?.favorite;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(JSON.stringify(favorites));
}
