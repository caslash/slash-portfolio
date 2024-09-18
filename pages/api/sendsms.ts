import { NextApiRequest, NextApiResponse } from "next";

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const auth = req.headers.authorization as string;
  const messageText: string = req.body.messageText as string;
  const phoneNumbers: Array<string> = req.body.phoneNumbers as Array<string>;

  const requestHeaders = new Headers();
  requestHeaders.append("Authorization", `App ${auth}`);
  requestHeaders.append("Content-Type", "application/json");
  requestHeaders.append("Accept", "application/json");

  const requestBody: string = JSON.stringify({
    messages: [
      {
        destinations: phoneNumbers.map((number) => {
          return { to: number };
        }),
        from: "447491163443",
        text: messageText,
      },
    ],
  });

  fetch("https://9krg5y.api.infobip.com/sms/2/text/advanced", {
    method: "POST",
    headers: requestHeaders,
    body: requestBody,
    redirect: "follow",
  })
    .then((response) => {
      if (response.ok) res.status(201).json({});
      else res.status(response.status).json(response.json());
    })
    .catch((error) => console.log(error));
}
