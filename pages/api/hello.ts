// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  message: string | undefined,
  error: string | undefined
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const name: string = String(req.query.name)

  if (Object.keys(name).length === 0) {
    res
    .status(400)
    .send({
      error: 'Invalid name in request!',
      message: undefined
    })
  } else {
    res
    .status(200)
    .send({
      message: `Hello, ${name}!`,
      error: undefined
    })
  }
}
