// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  name: string,
  age: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const name = req.query.name as string;
  const age = req.query.age as string;
  res.status(200).json({
    name: name,
    age: Number(age)
  })
}