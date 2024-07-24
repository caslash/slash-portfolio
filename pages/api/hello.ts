// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * components:
 *  schemas:
 *    HelloResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Your name
 *          example: Cameron
 *        age:
 *          type: integer
 *          description: Your age
 *          example: 24
 */
type HelloResponse = {
  name: string,
  age: number
}

/**
 * @swagger
 * /api/hello:
 *  get:
 *    description: Returns JSON object
 *    parameters:
 *      - in: query
 *        name: name
 *        description: Your name
 *        type: string
 *      - in: query
 *        name: age
 *        description: Your age
 *        type: integer
 *    responses:
 *      200:
 *        description: Returns HelloResponse object
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/HelloResponse'
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloResponse>
) {
  const name = req.query.name as string;
  const age = req.query.age as string;
  res.status(200).json({
    name: name,
    age: Number(age)
  })
}