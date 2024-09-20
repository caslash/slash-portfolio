import SMSRequestBody from "@/models/smsRequestBody";
import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/sendsms:
 *   post:
 *     summary: Sends SMS Message
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *     requestBody:
 *       description: JSON object of message and numbers to send to
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/SMSRequestBody"
 *     responses:
 *       "201":
 *         description: Successfully sent SMS message
 */
export async function POST(req: NextRequest) {
  const auth = req.headers.get("Authorization") as string;
  const body = await req.json();

  const smsRequestBody: SMSRequestBody = {
    messageText: body.messageText,
    phoneNumbers: body.phoneNumbers,
  };

  const requestHeaders = new Headers();
  requestHeaders.append("Authorization", `App ${auth}`);
  requestHeaders.append("Content-Type", "application/json");
  requestHeaders.append("Accept", "application/json");

  const requestBody: string = JSON.stringify({
    messages: [
      {
        destinations: smsRequestBody.phoneNumbers.map((number) => {
          return { to: number };
        }),
        from: process.env.SMS_FROM_NUMBER,
        text: smsRequestBody.messageText,
      },
    ],
  });

  let response;

  await fetch(`https://${process.env.SMS_BASE_URL}/sms/2/text/advanced`, {
    method: "POST",
    headers: requestHeaders,
    body: requestBody,
    redirect: "follow",
  })
    .then((res) => {
      response = res;
    })
    .catch((error) => console.log(error));

  return NextResponse.json(response!.json(), {
    status: response!.status,
  });
}
