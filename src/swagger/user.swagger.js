/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

export const userSwagger = {
    paths: {
      "/users": {
        get: {
          summary: "Get all users",
          tags: ["Users"],
          responses: {
            200: { description: "List of users retrieved successfully" },
            500: { description: "Internal server error" },
          },
        },
      },
      "/users/{id}": {
        get: {
          summary: "Get a user by ID",
          tags: ["Users"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "User retrieved successfully" },
            404: { description: "User not found" },
            500: { description: "Internal server error" },
          },
        },
        put: {
          summary: "Update a user by ID",
          tags: ["Users"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    email: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            200: { description: "User updated successfully" },
            400: { description: "Invalid input" },
            404: { description: "User not found" },
            500: { description: "Internal server error" },
          },
        },
        delete: {
          summary: "Delete a user by ID",
          tags: ["Users"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "User deleted successfully" },
            404: { description: "User not found" },
            500: { description: "Internal server error" },
          },
        },
      },
    },
  };