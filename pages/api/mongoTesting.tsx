// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {connectToDatabase}  from '../../infra/mongoDb'
type Feature = {
  name: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {  
  let { db } = await connectToDatabase();
  let collection = await db
  .collection('companies')
  .find({})
  .limit(10);

  const results = JSON.stringify(await collection.toArray());
  console.log(results);

  res.status(200).json(results);
};

export default handler
