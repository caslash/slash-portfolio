// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import HelloResponse from "@/models/helloResponse";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Returns JSON object
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Your name
 *       - in: query
 *         name: age
 *         schema:
 *           type: integer
 *         description: Your age
 *     responses:
 *       "200":
 *         description: Returns HelloResponse object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/HelloResponse"
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloResponse>
) {
  const name = req.query.name as string;
  const age = req.query.age as string;
  res.status(200).json({
    name: name,
    age: Number(age),
  });
}
