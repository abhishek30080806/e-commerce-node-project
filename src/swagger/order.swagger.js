/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */

export const orderSwagger = {
    paths: {
      "/orders": {
        get: {
          summary: "Get all orders",
          tags: ["Orders"],
          responses: {
            200: { description: "List of orders retrieved successfully" },
            500: { description: "Internal server error" },
          },
        },
        post: {
          summary: "Create a new order",
          tags: ["Orders"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    userId: { type: "string" },
                    productId: { type: "string" },
                    quantity: { type: "number" },
                    status: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            201: { description: "Order created successfully" },
            400: { description: "Invalid input" },
            500: { description: "Internal server error" },
          },
        },
      },
      "/orders/{id}": {
        get: {
          summary: "Get an order by ID",
          tags: ["Orders"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "Order retrieved successfully" },
            404: { description: "Order not found" },
            500: { description: "Internal server error" },
          },
        },
        put: {
          summary: "Update an order's status by ID",
          tags: ["Orders"],
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
                    status: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            200: { description: "Order status updated successfully" },
            400: { description: "Invalid input" },
            404: { description: "Order not found" },
            500: { description: "Internal server error" },
          },
        },
        delete: {
          summary: "Delete an order by ID",
          tags: ["Orders"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "Order deleted successfully" },
            404: { description: "Order not found" },
            500: { description: "Internal server error" },
          },
        },
      },
    },
  };