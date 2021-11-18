// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise  from '../../infra/mongoDb'
type Feature = {
  name: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Feature[]>
) => {
\  const client = await clientPromise
  const response = [
    { name: "Test Feature 1" } as Feature,
    { name: "Test Feature 2" } as Feature,
    { name: "Test Feature 3" } as Feature,
    { name: "Test Feature 4" } as Feature,
  ];

  res.status(200).json(response);
};

export default handler
