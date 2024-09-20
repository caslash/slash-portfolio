/**
 * @swagger
 * components:
 *  schemas:
 *      SMSRequestBody:
 *          description: Request body of /sendsms
 *          type: object
 *          properties:
 *              messageText:
 *                  type: string
 *                  description: Text of sms text message
 *                  example: Hello, World
 *              phoneNumbers:
 *                  type: array
 *                  items:
 *                      type: string
 *                  description: List of phone numbers to send the text message to
 *                  example: ["13171234567", "13177654321"]
 */
type SMSRequestBody = {
  messageText: string;
  phoneNumbers: string[];
};

export default SMSRequestBody;
