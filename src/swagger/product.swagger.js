/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

export const productSwagger = {
    paths: {
      "/products": {
        get: {
          summary: "Get all products",
          tags: ["Products"],
          responses: {
            200: { description: "List of products retrieved successfully" },
            500: { description: "Internal server error" },
          },
        },
        post: {
          summary: "Create a new product",
          tags: ["Products"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    price: { type: "number" },
                    description: { type: "string" },
                    category: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            201: { description: "Product created successfully" },
            400: { description: "Invalid input" },
            500: { description: "Internal server error" },
          },
        },
      },
      "/products/{id}": {
        get: {
          summary: "Get a product by ID",
          tags: ["Products"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "Product retrieved successfully" },
            404: { description: "Product not found" },
            500: { description: "Internal server error" },
          },
        },
        put: {
          summary: "Update a product by ID",
          tags: ["Products"],
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
                    price: { type: "number" },
                    description: { type: "string" },
                    category: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            200: { description: "Product updated successfully" },
            400: { description: "Invalid input" },
            404: { description: "Product not found" },
            500: { description: "Internal server error" },
          },
        },
        delete: {
          summary: "Delete a product by ID",
          tags: ["Products"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "Product deleted successfully" },
            404: { description: "Product not found" },
            500: { description: "Internal server error" },
          },
        },
      },
    },
  };