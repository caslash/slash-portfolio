/**
 * @swagger
 * components:
 *  schemas:
 *      HelloResponse:
 *          description: Returned object of name and age
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: Your name
 *                  example: Cameron
 *              age:
 *                  type: integer
 *                  description: Your age
 *                  example: 24
 */
type HelloResponse = {
  name: string;
  age: number;
};

export default HelloResponse;
