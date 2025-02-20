/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management
 */

export const reviewSwagger = {
    paths: {
      "/reviews": {
        get: {
          summary: "Get all reviews",
          tags: ["Reviews"],
          responses: {
            200: { description: "List of reviews retrieved successfully" },
            500: { description: "Internal server error" },
          },
        },
        post: {
          summary: "Create a new review",
          tags: ["Reviews"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    productId: { type: "string" },
                    userId: { type: "string" },
                    rating: { type: "number" },
                    comment: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            201: { description: "Review created successfully" },
            400: { description: "Invalid input" },
            500: { description: "Internal server error" },
          },
        },
      },
      "/reviews/{id}": {
        get: {
          summary: "Get a review by ID",
          tags: ["Reviews"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "Review retrieved successfully" },
            404: { description: "Review not found" },
            500: { description: "Internal server error" },
          },
        },
        put: {
          summary: "Update a review by ID",
          tags: ["Reviews"],
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
                    rating: { type: "number" },
                    comment: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            200: { description: "Review updated successfully" },
            400: { description: "Invalid input" },
            404: { description: "Review not found" },
            500: { description: "Internal server error" },
          },
        },
        delete: {
          summary: "Delete a review by ID",
          tags: ["Reviews"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "Review deleted successfully" },
            404: { description: "Review not found" },
            500: { description: "Internal server error" },
          },
        },
      },
    },
  };