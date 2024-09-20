import HelloResponse from "@/models/helloResponse";
import { NextRequest, NextResponse } from "next/server";

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
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const responseObject: HelloResponse = {
    name: searchParams.get("name") as string,
    age: Number(searchParams.get("age") as string),
  };

  return NextResponse.json(responseObject, { status: 200 });
}
